const express = require('express');
const router = express.Router();
const mySql = require('mysql');

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: '4710COPP',
    database: 'COP4710'
});

//loads public events
//access public
router.post('/public', (req, res) => {
    
    const { univ_id } = req.body;

    let sql = 'SELECT';

    pool.query(sql, univ_id, (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }

        res.json(result);
    });
});

//loads private and public events
//access private
router.post('/private', (req, res) => {

    const { univ_id } = req.body;

    let sql = 'SELECT';

    pool.query(sql, univ_id, (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }

        res.json(result);
    });
});

//loads public, private, and RSO events
//access private
router.post('/rso', auth, (req, res) => {
    const { username, univ_id } = req.body;

    let sql = '';

    pool.query(sql, [username, univ_id, univ_id], (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }

        res.json(result);
    })
});

router.post('/create', (req, res) => {
    
    //const {} = req.body;

    let sql = '';

    pool.query(sql, [], (err, result) => {
        
        if (err) {
            return res.status(400).send(err);
        }

        return res.json(result);
    });

   
});

router.post('/checkTime', (req, res) => {
    
    const { univ_id, location, date, time } = req.body;

    let sql = 'SELECT COUNT(*) as count FROM events WHERE (Events_university_id = ? AND location = ? AND date = ? AND time = ?)';

    pool.query(sql, [univ_id, location, date, time], (req, res) => {
        res.json(result[0].count);
    });
});

module.exports = router;