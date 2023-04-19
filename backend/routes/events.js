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

router.post('/getAllRSOEvents', (req, res) => {

    const { RSO_id } = req.body;

    let sql = 'SELECT * FROM RSO_Events';

    pool.query(sql, RSO_id, (err, result) => {

        if (err) {
            return res.status(400).send(err);
        }
     });
});


router.post('/getAll', (req, res) => {
    
    let sql = 'SELECT * FROM Events';

    pool.query(sql, (err, result) => {
        
        if (err) {
            return res.status(400).send(err);
        }

        if (Object.keys(result).length === 0) {
            return res.status(450).json({ msg: "No Events in DB!" });
        } else {
            const events = [];

            //copies info of each event over to pass
            for (let i = 0; i < Object.keys(result).length; i++) {
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

                tmp.event_id = result[i].event_id;
                tmp.name = result[i].name;
                tmp.location_id = result[i].location_id;
                tmp.date_and_time = result[i].date_and_time;
                tmp.category = result[i].category;
                tmp.email = result[i].email;
                tmp.description = result[i].description;

                events.push(tmp);
            }

            console.log(events);

            return res.status(200).json({ msg: "Events Grabbed from DB", events: events });
        }
        //creates array of events to pass back to frontend
        
    });
});



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

//creates RSO event
//access private
router.post('/CreateRSO', (req, res) => {
    const { admin_id, RSO_id } = req.body;

    let sql = 'INSERT INTO RSO (RSO_id, admin_id) VALUES (?, ?)';

    pool.query(sql, [RSO_id, admin_id], (err, result) => {
        if (err) {
            return res.status(400).send(err);
        }

        sql = 'SELECT * FROM RSO WHERE RSO_id = ?'

        pool.query(sql, [RSO_id], (err, result) => {

            if (err) {
                return res.status(400).send(err);
            } 

            const RSO = [];

            for (let i = 0; i < Object.keys(result).length; i++) {
                let tmp = {
                    "RSO_id": "",
                    "admin_id": ""
                };

                tmp.RSO_id = result[0].RSO_id;
                tmp.admin_id = result[0].admin_id;

                RSO.push(tmp);
            }

            console.log(RSO);

            return res.status(200).json({ msg: "RSO created", events: RSO });
        });
    });
});

router.post('/createEvent', (req, res) => {
    
    const { name, location_id, date_and_time, category, phone, email, description } = req.body;

    let sql = 'INSERT INTO Events (name, location_id, date_and_time, category, phone, email, description) VALUES (?, ?, ?, ?, ?, ?, ?)';

    pool.query(sql, [name, location_id, date_and_time, category, phone, email, description], (err, result) => {
        
        if (err) {
            return res.status(400).send(err);
        }

        sql = 'SELECT * FROM Events WHERE name = ?'

        pool.query(sql, [name], (err, result) => {
            const events = [];

            //copies info of each event over to pass
            for (let i = 0; i < Object.keys(result).length; i++) {
                let tmp = {
                    "event_id": "12345",
                    "name": "",
                    "location_id": "",
                    "date_and_time": "",
                    "category": "",
                    "phone": 0,
                    "email": "",
                    "description": ""
                };

                tmp.event_id = result[i].event_id;
                tmp.name = result[i].name;
                tmp.location_id = result[i].location_id;
                tmp.date_and_time = result[i].date_and_time;
                tmp.category = result[i].category;
                tmp.email = result[i].email;
                tmp.description = result[i].description;

                events.push(tmp);
            }

            console.log(events);

            return res.status(200).json({ msg: "Events Grabbed from DB", events: events });
        });

    });

   
});

router.post('/addLocation', (req, res) => {

    const { location_id, name, lat, long } = req.body;

    let sql = 'INSERT INTO Location (location_id, name, lat, long) VALUES (?, ?, ?, ?)';

    pool.query(sql, [location_id, name, lat, long], (err, result) => {
        
            if (err) {
                return res.status(400).send(err);
            }

            sql = 'SELECT * FROM Location WHERE name = ?';

            pool.query(sql, [name], (err, result) => { 

                const locations = [];

                //copies info of each event over to pass
                for (let i = 0; i < Object.keys(result).length; i++) {
                    let tmp = {
                        "location_id": "2389423",
                        "name": "",
                        "lat": 0,
                        "long": 0,
                    };

                    tmp.name = result[i].name;
                    tmp.lat = result[i].lat;
                    tmp.long = result[i].long;
                    
                    locations.push(tmp);
                }

                console.log(locations);

                return res.status(200).json({ msg: "Location added into DB", location: locations });
        });

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