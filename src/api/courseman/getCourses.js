const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12341234",
    database : 'courseman'
});

const getCourses = express();

getCourses.set('port', process.env.PORT || 3000);

getCourses.get('/users',(req,res) => {
    connection.query('SELECT * from courseman.courses', (error, rows) => {
        if (error) throw error;
        res.send(rows);
    })
})

getCourses.listen(getCourses.get('port'), () => {
    console.log('Express server listening on port ' + getCourses.get('port'));
  });