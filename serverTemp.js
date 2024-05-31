const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");
const path = require('path');
const User = require("./UserModel");
const bcrypt = require('bcryptjs');

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

app.get('/', sendIndex);
app.get('/register', sendIndex);
app.get('/verification', sendIndex);
app.get('/home', sendIndex);
app.post('/register', register);
app.post("/login", login);  

app.get('*', sendIndex);

function sendIndex(req, res, next) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}

// Register Users -------------------------
const pepper = "3+o];A?]l93+Ku;s0Fh3";
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

        // Add pepper to the password
        const pepperedPassword = password + pepper;

        // Hash the password with bcrypt
        const hashedPassword = await bcrypt.hash(pepperedPassword, 10); // 10 is the saltRounds

        // Create a new user with hashed password
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        res.redirect('/verification');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// Log Users In -----------------------------------------
async function login(req, res, next) {
    if (req.session.loggedin) {
        res.status(200).send("Already logged in.");
        return;
    }

    let email = req.body.email;
    let password = req.body.password;

    console.log("Logging in with credentials:");
    console.log("Username: " + req.body.email);
    console.log("Password: " + req.body.password);

    try {
        // Find the user in the database
        const user = await mongoose.connection.db.collection("users").findOne({ email });

        if (!user) {
            res.status(401).send("Unauthorized");
            return;
        }

        // Concatenate password with pepper
        const pepperedPassword = password + pepper;

        // Compare the password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(pepperedPassword, user.password);

        if (passwordMatch) {
            req.session.loggedin = true;
            req.session.email = user.email;
            req.session.name = user.name;
            console.log(req.session.name);
            res.redirect("/home");
        } else {
            res.status(401).send("Not authorized. Invalid password.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}


mongoose.connect('mongodb://127.0.0.1/Loci');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
    app.listen(3000);
    console.log("Server listening on port 3000");
});
