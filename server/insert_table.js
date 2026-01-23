const pool = require("./db"); // Pool file

const sql = `
  INSERT INTO customers (name, address)
  VALUES ('Company Inc', 'Highway 37')
`;

pool.query(sql, (err, result) => {
  if (err) throw err;
    console.log("1 record inserted");
  process.exit();
});
