require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 2021;
const { db, url } = require("./config/mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongo");
const passport = require("passport");
const passportLocal = require("./config/passportLocal");
const cors = require("cors");
const path = require("path");

//allowing cors
app.use(
    cors({
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use("/public/avatars", express.static(path.join(__dirname, "/public/avatars")));
app.use("/public/books", express.static(path.join(__dirname, "/public/books")));
app.use("/public/thumbs", express.static(path.join(__dirname, "/public/thumbs")));

//body-parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create a session and store it in db
app.use(
    session({
        name: "Bookish-server",
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60 * 48,
            sameSite: "none",
        },
        store: mongoStore.create(
            {
                mongoUrl: url,
            },
            (err) => {
                console.log("Error in mongoStore (index.js)!");
                console.log(err);
            }
        ),
    })
);

//to authenticate and change the 'user'
app.use(passport.initialize());
app.use(passport.session()); //uses serializeUser and deserializeUser -> express-session is needed for it to work

app.use("/", require("./routes/index"));
app.listen(port, (err) => {
    if (err) console.log("Error occured on the server: ", err);
    else console.log("Server is up and running at port: ", port);
});
