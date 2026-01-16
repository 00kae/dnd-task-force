let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

con.connection(function(err) {
    if (err) throw err;
    console.log("Connected");
    let sql = "INSERT INTO username (name) VALUES ('pepeppee'))";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("1 record inserted");
    });
});