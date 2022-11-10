var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12341234",
    database : 'courseman'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

con.query('select * from courseman.transcript', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});