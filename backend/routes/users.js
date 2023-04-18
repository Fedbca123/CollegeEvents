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

    const { user_id, pass, univ_id } = req.body;

    if (!user_id || !pass || !univ_id) {
        return res.status(420).json({ error: "Please enter all fields" });
    }

    // let sql = 'INSERT INTO users(username, password, auth_level, Users_university_id, university_name) VALUES (?, ?, ?, ?, ?)';
    let sql = 'INSERT INTO Student(username, password, univ_id) VALUES (?, ?, ?)';

    pool.query(sql, [user_id, pass, univ_id], (err, result) => {

        if (err) {
            if (err.code == "ER_DUP_ENTRY") {
                return res.status(400).json({ msg: 'Username already exists' });
            }
            err.msg = "MySQL Error";
            return res.status(400).send(err);
        }
        console.log(result);
        
        sql = 'SELECT * FROM users WHERE username =  ?';
        pool.query(sql, user_id, (err, result) => {
            if (err) {
                return res.send(err);
            }

            console.log(result);
        });
    })

});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(420).json({ msg: 'Please enter all fields' });
    }

    let sql = 'SELECT * FROM users WHERE username = ?';

    pool.query(sql, username, (err, result) => {
        if (err) {
            return res.send(err);
        }

        if (Object.keys(result).length !== 1) {
            return res.status(400).json({ msg: "Username not found" });
        }

        if (result[0].password != password) {
            return res.status(400).json({ msg: "Invalid Username/Password" });
        }

        const user = ({
            "username": result[0].user_id,
            "authlevel": result[0].authlevel,
            "university": result[0].univ_id,
        });
    })
})

module.exports = router;
// exports.setApp = function (app, client) {
    
//     //login endpoint
//     app.post('api/login', async (req, res, next) => {
//         const { username, password } = req.body;
//         let error = '';

//         try {
            
//             const client = client.db();
//             const foundUser = await db.collection('users').findOne({ user_id: username, pass: password });
            
//             var ret;

//             if (!foundUser) {
//                 // no user, return 400 (or 404 not found) code
//                 ret = { error: 'Unrecognized credentials' };
//                 res.status(400).json(ret);
//                 return;
//             }

//             id = foundUser.user_id.toString();
//             univ_id = foundUser.univ_id;

//             ret = { user_id: username, error: error };
//             res.status(200).json(ret);

//         } catch (e) {
//             let error = e.toString();
//             res.status(400).json({ error: error });
//         }
//     });

//     //register endpoint
//     app.post('/api/register', async (req, res, next) => {
//         const { username, password, univ_id, authLevel } = req.body;

//         const newUser = { UserName: username, Univ_id: univ_id, Password: password };
//         let error = '';
//         var ret;

//         try {
//             const db = client.db();

//             if (authLevel === "Student") {
//                 const searchUsername = await db.collection('users').findOne({ user_id: username });

//                 // check if username already in use
//                 if (searchUsername) {
//                     ret = { error: 'Username already exists' };
//                     res.status(500).json(ret);
//                     return;
//                 }

//                 // check if email already in use
//                 // else if (searchEmail) {
//                 //     ret = { error: "Account already registered with this email" };
//                 //     res.status(500).json(ret);
//                 //     return;
//                 // }

//                 // else create new user
//                 else {
//                     db.collection('Student').insertOne(newUser);
//                 }
//             } else if (authLevel === "Admin") {
//                 const searchUsername = await db.collection('users').findOne({ user_id: username });

//                 // check if username already in use
//                 if (searchUsername) {
//                     ret = { error: 'Username already exists' };
//                     res.status(500).json(ret);
//                     return;
//                 }

//                 // check if email already in use
//                 // else if (searchEmail) {
//                 //     ret = { error: "Account already registered with this email" };
//                 //     res.status(500).json(ret);
//                 //     return;
//                 // }

//                 // else create new user
//                 else {
//                     db.collection('Admin').insertOne(newUser);
//                 }
//             } else {
//                 const searchUsername = await db.collection('users').findOne({ user_id: username });

//                 // check if username already in use
//                 if (searchUsername) {
//                     ret = { error: 'Username already exists' };
//                     res.status(500).json(ret);
//                     return;
//                 }

//                 // check if email already in use
//                 // else if (searchEmail) {
//                 //     ret = { error: "Account already registered with this email" };
//                 //     res.status(500).json(ret);
//                 //     return;
//                 // }

//                 // else create new user
//                 else {
//                     db.collection('Super Admin').insertOne(newUser);
//                 }
//             }
            
//         }
//         catch (e) {
//             error = e.toString();
//         }

//         ret = { Username: username, Univ_id: univ_id, Password: password, error: error };
//         res.status(200).json(ret);
//      });
// }