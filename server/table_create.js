let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

con.connection(function(err){
    if (err) throw err;
    console.log("Connected");
    let sql = "CREATE TABLE username (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Table created");
    });
});