const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err || !user) {
            res.json({
                status: "error",
                message: info.message
            });
            return;
        }
        
        req.logIn(user, (err) => {
            if(err) {
                console.log("Error during login, registrationController.js!");
                console.log(err);
                return next(err);
            }

            res.json({
                status: "success",
                message: info.message,
                user: user
            })

        })
    })(req, res, next);
}

module.exports.createUser = (req, res) => {
    let data = req.body;

    User.findOne({email: data.email}, (err, user) => {
        if(err) {
            console.log("Error occured while finding user, registrationController.js!");
            console.log(err);
            res.json({
                status: "error",
                message: "Error occured while searching user"
            })
            return;
        }

        if(user) {
            res.json({
                status: "error",
                message: "User already exists! Please sign in."
            })
            return;
        }

        bcrypt.hash(data.password, 12, (err, hash) => {
            if(err) {
                console.log('Error while hashing password in bcrypt, registrationController.js!');
                console.log(err);
                res.json({
                    status: "error",
                    message: "Some problem occured. Please try again."
                })
                return;
            }

            data.password = hash;

            User.create({...data}, (err) => {
                if(err) {
                    console.log("Error while creating user, registrationController.js!");
                    console.log(err);
                    res.json({
                        status: "error",
                        message: "Error occured while creating user in db. Please try again."
                    })
                }

                res.json({
                    status: "success",
                    message: "User created successfully. Please sign in to continue."
                })
            })
        })
    })
}