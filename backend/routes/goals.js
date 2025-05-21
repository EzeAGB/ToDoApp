var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});
connection.connect((err) => {
    if (err) {
        console.error('Error when connecting to DB: ' + err.message);
        return;
    }
    else {
        console.log('Connected to DB successfully with id ' + connection.threadId);
    }
});

/* GET users listing. */
router.get('/getGoals', function(req, res, next) {
    let queryGetGoals = 'SELECT * FROM goals;';
    connection.query(queryGetGoals, (err, results, fields) => {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json(results);
        }
    });
});

router.post('/addGoal', function(req, res, next) {
    if (req.body && req.body.name && req.body.description && req.body.dueDate) {
        let queryCreateGoal = 'INSERT INTO goals (name, description, dueDate) \
        VALUES ("' + req.body.name + '", "' + req.body.description + '", "' + req.body.dueDate + '");';
        connection.query(queryCreateGoal, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(results);
            }
        });
    }
    else {
        res.status(400).json({});
    }
});

router.delete('/removeGoal/:id', function(req, res, next) {
    if (req.params && req.params.id) {
        const id = req.params.id;
        let queryDeleteGoal = 'DELETE FROM goals WHERE id = ' + id + ';';
        connection.query(queryDeleteGoal, (err, results, fields) => {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(results);
            }
        });
    }
    else {
        res.status(400).json({});
    }
});

module.exports = router;