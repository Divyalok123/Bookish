const User = require("../models/user");
const Book = require("../models/book");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

module.exports.updateProfile = (req, res) => {
    let check = false;
    User.multerUpload(req, res, async (err) => {
        try {
            if (err) {
                if (err instanceof multer.MulterError) {
                    console.log("Multer Error: ", err);
                } else console.log("Multer Error__: ", err);
                res.json({
                    status: "error",
                    message: "File Upload Error!",
                });
                return;
            }

            let data = req.body;
            const userId = data.userid;
            let user = await User.findById(userId);

            if (req.file) {
                if (user.avatar) {
                    let prevavatarpath = path.join(__dirname, "..", user.avatar);

                    if (fs.existsSync(prevavatarpath)) {
                        // check if the path exists
                        fs.unlink(prevavatarpath, (err) => {
                            if (err) {
                                console.log("err: ", err);
                                res.json({
                                    status: "error",
                                    message: "Error occured!",
                                });
                                return;
                            }
                            console.log("Deleted previous file");
                        });
                    }
                }

                user.avatar = User.avatarPath + "/" + req.file.filename;
                check = true;
            }

            if (data.firstname) {
                user.firstname = data.firstname;
                check = true;
            }

            if (data.lastname) {
                user.lastname = data.lastname;
                check = true;
            }

            if (data.about) {
                user.about = data.about;
                check = true;
            }

            if (data.title) {
                user.title = data.title;
                check = true;
            }

            if (data.genre && data.genre.length) {
                user.likes = data.genre.split(",");
                check = true;
            }

            if (data.linkedin || data.instagram || data.facebook) {
                let newOtherProfiles = Object.create(null);
                newOtherProfiles["linkedin"] = data.linkedin;
                newOtherProfiles["instagram"] = data.instagram;
                newOtherProfiles["facebook"] = data.facebook;

                user.otherprofiles = Object.assign({}, newOtherProfiles);
                check = true;
            }

            if (!check) {
                res.json({
                    status: "error",
                    message: "No input provided",
                });
                return;
            }

            user.save();
            res.json({
                status: "success",
                message: "Sucessfully updated profile!",
                user,
            });
        } catch (err) {
            console.log(err);
            res.json({
                status: "error",
                message: "Error occured in User.multerupload!",
            });
        }
    });
};

module.exports.getUserBooks = async (req, res) => {
    try {
        const userId = req.query.userid;
        const user = await User.findById(userId);

        let userBooks = [];

        let books = user.mybooks.map(async (bookid) => {
            const book = await Book.findById(bookid);
            userBooks.push(book);
        })

        books = await Promise.all(books);

        res.json({
            status: "success",
            message: "Got user books",
            userBooks
        });
    } catch (err) {
        console.log("Error (getUserBooks controller): ", err);
        res.json({
            status: "error",
            message: "Error occured while getting user Books!",
        });
    }
};

module.exports.getFavourites = async (req, res) => {}