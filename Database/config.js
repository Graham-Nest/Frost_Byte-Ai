const { Pool } = require('pg');

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Default bot settings
const defaultSettings = {
  antilink: 'on',
  antilinkall: 'off',
  autobio: 'off',
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
  antiedit: 'private',
  autoview: 'on',
  wapresence: 'recording'
};

// Initialize the database and insert default settings
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

    await client.query('BEGIN');
    for (const [key, value] of Object.entries(defaultSettings)) {
      await client.query(
        `INSERT INTO bot_settings (key, value)
         VALUES ($1, $2)
         ON CONFLICT (key) DO NOTHING;`,
        [key, value]
      );
    }
    await client.query('COMMIT');

    console.log("✅ Database initialized.");
  } catch (err) {
    await client.query('ROLLBACK');
    console.error("❌ Initialization error:", err);
  } finally {
    client.release();
  }
}

// Helper to convert 'on'/'off' to boolean
function parseValue(value) {
  if (value === 'on') return true;
  if (value === 'off') return false;
  return value;
}

// Fetch current settings from database
async function getSettings() {
  const client = await pool.connect();

  try {
    const result = await client.query(
      `SELECT key, value FROM bot_settings WHERE key = ANY($1::text[])`,
      [Object.keys(defaultSettings)]
    );

    const settings = {};
    for (const row of result.rows) {
      settings[row.key] = parseValue(row.value);
    }

    console.log("✅ Settings fetched from DB.");
    return settings;

  } catch (err) {
    console.error("❌ Failed to fetch settings:", err);
    return defaultSettings;
  } finally {
    client.release();
  }
}

// Update a single setting in the database
async function updateSetting(key, value) {
  const client = await pool.connect();

  try {
    if (!Object.keys(defaultSettings).includes(key)) {
      throw new Error(`Invalid setting key: ${key}`);
    }

    await client.query(
      `UPDATE bot_settings SET value = $1 WHERE key = $2`,
      [value, key]
    );

    console.log(`✅ Setting updated: ${key} = ${value}`);
    return true;
  } catch (err) {
    console.error("❌ Failed to update setting:", err.message || err);
    return false;
  } finally {
    client.release();
  }
}

// Bot-level configuration
const botConfig = {
  ownerNumber: "254756360306@s.whatsapp.net",
  antidelete: {
    all: "off",     // on/off
    inbox: "off",   // on/off
    group: "on",    // on/off
    private: "on"   // on/off
  }
};

module.exports = {
  initializeDatabase,
  getSettings,
  updateSetting,
  defaultSettings,
  botConfig
};