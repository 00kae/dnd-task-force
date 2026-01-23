const pool = require("./db"); // Pool file

const sql = `
  CREATE TABLE IF NOT EXISTS username (
    name VARCHAR(255),
    address VARCHAR(255)
  )
`;

pool.query(sql, (err, result) => {
  if (err) throw err;
  console.log("Table created");
  process.exit();
});