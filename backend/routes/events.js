const express = require('express');
const router = express.Router();
const mySql = require('mysql');
const { route } = require('./users');

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

    let sql = 'SELECT idEvent, Events.name AS name, category, description, date_and_time, email, RSO.name FROM Events INNER JOIN RSO On Events. WHERE ';

    pool.query(sql, univ_id, (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }

        res.json(result);
    });
});


router.post('/getAll', (req, res) => {
    
    let sql = 'SELECT * FROM Events';

    pool.query(sql, (err, result) => {
        
        if (err) {
            return res.status(400).send(err);
        }

        //creates array of events to pass back to frontend
        const events = [];

        //copies info of each event over to pass
        for (temp of Object.keys(result).length) {
            let tmp = {
                "event_id": "",
                "name": "",
                "location_id": "",
                "date_and_time": "",
                "category": "",
                "phone": 0,
                "email": "",
                "description": ""
            };

            tmp.event_id = temp.event_id;
            tmp.name = temp.name;
            tmp.location_id = location_id;
            tmp.date_and_time = temp.date_and_time;
            tmp.category = temp.category;
            tmp.email = temp.email;
            tmp.description = temp.description;

            events.push(tmp);
        }

        console.log(events);

        return res.status(200).json({ msg: "Events Grabbed from DB", events: events });
    })
})

// CREATE TABLE `COP4710`.`Events` (
//     event_id VARCHAR(50),
//     name VARCHAR(50),
//     location_id VARCHAR(50),
//     date_and_time TIMESTAMP,
//     category VARCHAR(50),
//     phone INT,
//     email VARCHAR(50),
//     description VARCHAR(250),
//     PRIMARY KEY (event_id),
//     FOREIGN KEY (location_id) REFERENCES Location
// );

//loads private and public events
//access private
router.post('/private', (req, res) => {

    const { univ_id } = req.body;

    let sql = 'SELECT * FROM events WHERE status = "public" OR "private" AND Events_university_id = ?';

    pool.query(sql, univ_id, (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }

        res.json(result);
    });
});

//loads public, private, and RSO events
//access private
router.post('/rso', (req, res) => {
    const { username, univ_id } = req.body;

    let sql = 'SELECT idEvent,  rsos.name, rsos.idRSO, events.name AS eventName, events.approved, Events_university_id, events.status, category, description, time, events.date, location, phone, email, rating, numRatings, scoreRatings, RSO_Member_user_id FROM events INNER JOIN rso_members ON events.Events_RSO_id = rso_members.RSO_member_RSO_id AND RSO_Member_user_id = ? INNER JOIN rsos ON events.Events_RSO_id = rsos.idRSO AND Events_university_id = ? AND events.approved = 1 GROUP BY idEvent UNION SELECT idEvent,  rsos.name, rsos.idRSO, events.name AS eventName, events.approved, Events_university_id, events.status, category, description, time, events.date, location, phone, email, rating, numRatings, scoreRatings, RSO_Member_user_id FROM events, rso_members, rsos WHERE events.Events_RSO_id = rsos.idRSO AND (events.Events_university_id = ? AND events.approved = 1 AND events.status = "public") GROUP BY idEvent';

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

//loads events that need admin approval
//access private
router.post('/getUnapprovedEvents', (req, res) => {
    
    const { univ_id } = req.body;

    let sql = 'SELECT idEvent, events.name AS eventName, category, description, time, events.date, location, phone, email, rating, numRatings, scoreRatings, rsos.name FROM events INNER JOIN rsos ON events.Events_RSO_id = rsos.idRSO WHERE events.approved = 0 AND events.Events_university_id = ?';

    pool.query(sql, university_id, (err, result) => {

        if (err) {
            return res.status(400).send(err);
        }

        return res.json(result);
    });
});

//loads events that need admin approval
//access private
router.post('/approveEvent', (req, res) => {
    
    const { event_id } = req.body;

    let sql = 'UPDATE Events SET approved = 1 WHERE event_id = ?'
    pool.query(sql, event_id, (err, result) => {

        if (err) {
            return res.status(400).send(err);
        }

        return res.json(result);
    })
});

//loads events that need admin approval
//access private
router.post('/denyEvent', (req, res) => {

    const { event_id } = req.body;
    
    let sql = 'DELETE FROM Events WHERE event_id = ?';
    pool.query(sql, event_id, (err, result) => {
        
        if (err) {
            return res.status(400).send(err);
        }

        return res.json(result);
    });
});

module.exports = router;