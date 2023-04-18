const express = require('express');
const router = express.Router();
const mySql = require('mysql');

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: '4710COPP',
    database: 'COP4710'
});

router.post('/register', (req, res) => {

    const { user_id, pass, univ_id, authlevel } = req.body;

    if (!user_id || !pass || !univ_id) {
        return res.status(420).json({ error: "Please enter all fields" });
    }

    if (authlevel === 0) {
        let sql = 'INSERT INTO Student(user_id, pass, univ_id) VALUES (?, ?, ?)';

        pool.query(sql, [user_id, pass, univ_id], (err, result) => {

            if (err) {
                if (err.code == "ER_DUP_ENTRY") {
                    return res.status(400).json({ msg: 'Username already exists' });
                }
                err.msg = "MySQL Error";
                return res.status(400).send(err);
            }
             console.log(result);

            // return res.status(200).send(result);
            
            sql = 'SELECT * FROM Student WHERE user_id =  ?';
            pool.query(sql, user_id, (err, result) => {
                if (err) {
                    return res.send(err);
                }

                const user = ({
                    "username": result[0].user_id,
                    // "authlevel": result[0].authlevel,
                    "university": result[0].univ_id,
                    "pass":result[0].pass
                })
                console.log(user);

                return res.status(200).send(user);
            });
        }); 
    } else if (authlevel === 1) {
        let sql = 'INSERT INTO Admin(user_id, pass, univ_id) VALUES (?, ?, ?)';

        pool.query(sql, [user_id, pass, univ_id], (err, result) => {

            if (err) {
                if (err.code == "ER_DUP_ENTRY") {
                    return res.status(400).json({ msg: 'Username already exists' });
                }
                err.msg = "MySQL Error";
                return res.status(400).send(err);
            }
             console.log(result);

            // return res.status(200).send(result);
            
            sql = 'SELECT * FROM Admin WHERE user_id =  ?';
            pool.query(sql, user_id, (err, result) => {
                if (err) {
                    return res.send(err);
                }

                const user = ({
                    "username": result[0].user_id,
                    // "authlevel": result[0].authlevel,
                    "university": result[0].univ_id,
                    "pass":result[0].pass
                })
                console.log(user);

                return res.status(200).send(user);
            });
        }); 
    } else {
        let sql = 'INSERT INTO Super Admin(user_id, pass, univ_id) VALUES (?, ?, ?)';

        pool.query(sql, [user_id, pass, univ_id], (err, result) => {

            if (err) {
                if (err.code == "ER_DUP_ENTRY") {
                    return res.status(400).json({ msg: 'Username already exists' });
                }
                err.msg = "MySQL Error";
                return res.status(400).send(err);
            }
            console.log(result);

            // return res.status(200).send(result);
            
            sql = 'SELECT * FROM Super Admin WHERE user_id =  ?';
            pool.query(sql, user_id, (err, result) => {
                if (err) {
                    return res.send(err);
                }

                const user = ({
                    "username": result[0].user_id,
                    // "authlevel": result[0].authlevel,
                    "university": result[0].univ_id,
                    "pass":result[0].pass
                })
                console.log(user);

                return res.status(200).send(user);
            });
        }); 
    }
    

});

router.post('/login', (req, res) => {
    const { user_id, pass, authlevel } = req.body;

    if (!user_id || !pass || authlevel == undefined) {
        return res.status(420).json({ msg: 'Please enter all fields' });
    }

    let sql = 'SELECT * FROM Users WHERE user_id =  ?';  

    if (authlevel === 0) {
        sql = 'SELECT * FROM Student WHERE user_id =  ?';        
    } else if (authlevel === 1) {
        sql = 'SELECT * FROM Admin WHERE user_id =  ?'; 
    } else {
        sql = 'SELECT * FROM Super Admin WHERE user_id =  ?'; 
    }

    pool.query(sql, user_id, (err, result) => {
        if (err) {
            return res.send(err);
        }

        if (Object.keys(result).length !== 1) {
            return res.status(400).json({ msg: "Username not found" });
        }

        if (result[0].pass != pass) {
            return res.status(400).json({ msg: "Invalid Username/Password" });
        }

        const user = ({
            "username": result[0].user_id,
            // "authlevel": result[0].authlevel,
            "university": result[0].univ_id,
        });

        console.log(user);

        return res.status(200).json({ msg: "Login successful", user: user });
    });
});

module.exports = router;
