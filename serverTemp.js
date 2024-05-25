const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");
const path = require('path');
const User = require("./UserModel");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'some secret here',
    cookie: { maxAge: 6000000 },  // the cookie will expire in 100 minutes
    resave: true,
    saveUninitialized: true
}));

app.get('/register', sendIndex);
app.get('/verification', sendIndex);
app.post('/register', register);

app.get('*', sendIndex);

function sendIndex(req, res, next) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}

async function register(req, res, next) {
    const { name, email, password, passwordConfirm } = req.body;

    // Check if passwords match
    if (password !== passwordConfirm) {
        res.status(400).json({ message: 'Passwords do not match' });
        return;
    }

    try {
        // Check if the email is already registered
        const existingUser = await mongoose.connection.db.collection("users").findOne({ email });

        if (existingUser) {
            res.status(400).json({ message: 'Email is already registered' });
            return;
        }

        // Create a new user
        const newUser = new User({
            name,
            email,
            password
        });

        // Save the user to the database
        await newUser.save();

        res.redirect('/verification');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

mongoose.connect('mongodb://127.0.0.1/Loci');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
    app.listen(3000);
    console.log("Server listening on port 3000");
});
