require('express');
require('mysql');

exports.setApp = function (app, client) {
    
    //login endpoint
    app.post('api/login', async (req, res, next) => {
        const { username, password } = req.body;
        let error = '';

        try {
            
            const client = client.db();
            const foundUser = await db.collection('users').findOne({ Username: username, Password: password });

            let fn = '';
            let ln = '';
            let em = '';
            
            var ret;

            if (!foundUser) {
                // no user, return 400 (or 404 not found) code
                ret = { error: 'Unrecognized credentials' };
                res.status(400).json(ret);
                return;
            }

            id = foundUser._id.toString();
            fn = foundUser.FirstName;
            ln = foundUser.LastName;
            em = foundUser.Email;

            ret = { Id: id, Username: username, FirstName: fn, LastName: ln, Email: em, error: error };
            res.status(200).json(ret);

        } catch (e) {
            let error = e.toString();
            res.status(400).json({ error: error });
        }
    });

    //register endpoint
    app.post('/api/register', async (req, res, next) => {
        const { firstName, lastName, username, email, password } = req.body;

        const newUser = { FirstName: firstName, LastName: lastName, UserName: username, Email: email, Password: password };
        let error = '';
        var ret;

        try {
            const db = client.db();
            const searchUsername = await db.collection('users').findOne({ Username: username });
            const searchEmail = await db.collection('users').findOne({ Email: email });

            // check if username already in use
            if (searchUsername) {
                ret = { error: 'Username already exists' };
                res.status(500).json(ret);
                return;
            }

            // check if email already in use
            else if (searchEmail) {
                ret = { error: "Account already registered with this email" };
                res.status(500).json(ret);
                return;
            }

            // else create new user
            else {
                db.collection('users').insertOne(newUser);
            }
        }
        catch (e) {
            error = e.toString();
        }

        ret = {FirstName: firstName, LastName: lastName, Username: username, Email: email, Password: password, error: error};
        res.status(200).json(ret);
     });
}