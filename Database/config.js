const { Pool } = require('pg');

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Default bot settings
const defaultSettings = {
  antilink: 'on',
  antilinkall: 'off',
  autobio: 'on',
  antidelete: 'on',
  antitag: 'on',
  antibot: 'off',
  anticall: 'on',
  antiforeign: 'off',
  badword: 'on',
  gptdm: 'off',
  welcomegoodbye: 'off',
  autoread: 'off',
  mode: 'public',
  prefix: '.',
  autolike: 'on',
  autoview: 'on',
  antiedit: 'private',
  wapresence: 'recording' // Options: 'recording', 'typing', 'available', 'unavailable', 'follow_user'
};

// Stores the latest WA presence for the main user
let latestUserPresence = 'unavailable';

// Update latest presence from Baileys event
function updateLatestUserPresence(newPresence) {
  latestUserPresence = newPresence;
  console.log(`📡 Latest WA presence updated: ${newPresence}`);
}

// Initialize DB: create table if not exists and insert default settings
async function initializeDatabase() {
  const client = await pool.connect();
  console.log("📡 Connecting to PostgreSQL...");

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS bot_settings (
        id SERIAL PRIMARY KEY,
        key TEXT UNIQUE NOT NULL,
        value TEXT NOT NULL
      );
    `);

    for (const [key, value] of Object.entries(defaultSettings)) {
      await client.query(
        `INSERT INTO bot_settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO NOTHING;`,
        [key, value]
      );
    }

    console.log("✅ Database initialized.");
  } catch (err) {
    console.error("❌ Initialization error:", err);
  } finally {
    client.release();
  }
}

// Fetch settings from DB, merge with defaults
async function getSettings() {
  const client = await pool.connect();

  try {
    const result = await client.query(
      `SELECT key, value FROM bot_settings WHERE key = ANY($1::text[])`,
      [Object.keys(defaultSettings)]
    );

    const settings = {};
    for (const row of result.rows) {
      settings[row.key] = row.value;
    }

    console.log("✅ Settings fetched from DB.");
    return { ...defaultSettings, ...settings };
  } catch (err) {
    console.error("❌ Failed to fetch settings:", err);
    return defaultSettings;
  } finally {
    client.release();
  }
}

// Update a single setting in DB
async function updateSetting(key, value) {
  const client = await pool.connect();

  try {
    const validKeys = Object.keys(defaultSettings);
    if (!validKeys.includes(key)) {
      throw new Error(`Invalid setting key: ${key}`);
    }

    await client.query(
      `UPDATE bot_settings SET value = $1 WHERE key = $2`,
      [value, key]
    );

    return true;
  } catch (err) {
    console.error("❌ Failed to update setting:", err.message || err);
    return false;
  } finally {
    client.release();
  }
}

// Resolve final WA presence based on stored presence and user online status
function resolvePresence(wapresence, isUserOnline = false) {
  if (wapresence === 'follow_user') {
    return latestUserPresence || 'unavailable';
  }

  switch (wapresence) {
    case 'recording':
    case 'typing':
      return isUserOnline ? wapresence : 'unavailable';
    case 'available':
      return 'available';
    default:
      return 'unavailable';
  }
}

// config for owner and antidelete
const botConfig = {
  ownerNumber: "254756360306@s.whatsapp.net", 
  antidelete: {
    all: "off",      // on/off
    inbox: "off",   // on/off 
    group: "on",    // on/off
    private: "on"   // on/off
  }
};

module.exports = {
  initializeDatabase,
  getSettings,
  updateSetting,
  resolvePresence,
  updateLatestUserPresence,
  defaultSettings,
  botConfig
};