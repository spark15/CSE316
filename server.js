const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12341234",
    database : 'courseman'
});

const app = express();

app.use(cors());

app.set('port', process.env.PORT || 4000);

app.get('/api/courseman/getCourses',(req,res) => {
    connection.query('SELECT * from courseman.courses', (error, rows) => {
        if (error) throw error;
        res.json(rows);
    })
})

app.get('/api/courseman/getStudentWith/:id',(req,res) => {
    connection.query('select * FROM courseman.students WHERE student_id ='+req.params.id+';', (error, rows) => {
        if (error) throw error;
        res.json(rows);
    })
})

app.get('/api/courseman/prereqs',(req,res) => {
    connection.query('SELECT * from courseman.prereqs', (error, rows) => {
        if (error) throw error;
        res.json(rows);
    })
})

app.get('/api/courseman/transcript',(req,res) => {
    connection.query('SELECT * from courseman.transcript', (error, rows) => {
        if (error) throw error;
        res.json(rows);
    })
})

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
  });