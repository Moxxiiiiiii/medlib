const sqlite3 = require('sqlite3').verbose();

// Connect to a local file (it will be created if it doesn't exist)
const db = new sqlite3.Database('./database/db_medlib.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Connected to the SQLite database.');
});

// Close the connection when done
db.close();
