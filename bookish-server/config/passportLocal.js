const passport = require('passport');
const localStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/user');

passport.use(new localStrategy(
    {
        usernameField: "email",
        passwordField: "password"

    }, (email, password, done) => {
        
        User.findOne({email: email})
        .then((user) => {
            if(!user) {
                done(null, false, {message: "User not found!"});
                return;
            }

            bcrypt.compare(password, user.password, (err, same) => {
                if(err) {
                    console.log("Error while matching passwords, passportLocal.js!");
                    console.log(err);
                    done(null, false, {message: "Error matching passwords!"});
                    return;
                }

                if(same) {
                    done(null, user, {message: "Logged in successfully!"});
                } else {
                    done(null, false, {message: "Password incorrect!"});
                }
            })
        })
        .catch((err) => {
            console.log('Error in finding user in passport localStrategy!');
            done(err, false, {status: "error", message: "Error occured while finding user!"});
        })
}));

passport.serializeUser((user, done) => {done(null, user.id)});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if(err) {
            console.log('Error finding the user in passport deserializer!');
            console.log(err);
            done(err);
        }
        done(null, user);
    })
});

module.exports = passport;