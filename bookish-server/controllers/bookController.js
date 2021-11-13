const Book = require("../models/book");
const User = require("../models/user");
const multer = require("multer");

module.exports.addBook = async (req, res) => {
    const newBook = Object.create(null  );

    Book.multerUpload(req, res, (err) => {
        if (err) {
            console.log(err);
            res.json({
                status: "error",
                message: "Error occured while uploading file!",
            });
            return;
        }

        if (req.file) {
            newBook.pdflink = Book.bookPath + "/" + req.file.filename.split(" ").join("-");
        }

        let data = req.body;
        if (data.book_author_input) {
            newBook.author = data.book_author_input;
        }

        if (data.book_name_input) {
            newBook.name = data.book_name_input;
        }

        if (data.genre && data.genre.length) {
            newBook.genre = data.genre.split(",");
        }

        Book.create(newBook, async (err, book) => {
            try {
                if (err) {
                    console.log(err);
                    res.json({
                        status: "error",
                        message: "Error creating file in DB",
                    });
                    return;
                }

                if (req.user) {
                    const userId = req.user.id;
                    const user = await User.findById(userId);
                    user.mybooks.push(book.id);
                    user.save();
                }

                res.json({
                    status: "success",
                    message: "Book added successfully!",
                });
            } catch (err) {
                console.log(err);
                res.json({
                    status: "error",
                    message: "Error occured during fectching data!",
                });
            }
        });
    });
};

module.exports.getAll = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        console.log(allBooks);
        res.json({
            status: "success",
            allBooks,
        });
    } catch (err) {
        res.json({
            status: "error",
            message: "Error fetching books!",
        });
    }
};

module.exports.markFavourite = async (req, res) => {
    try {
        const userId = req.user.id;
        await User.findById(userId).favourites.push(req.body.bookid);
        res.json({
            status: "success",
            message: "Book marked Favourite!",
        });
    } catch (err) {
        res.json({
            status: "error",
            message: "Error marking favourite!",
        });
    }
};

module.exports.markNotFavourite = async (req, res) => {
    try {
        const userId = req.user.id;
        await User.updateOne({ _id: userId }, { $pullAll: { favourites: [req.body.bookid] } });
        res.json({
            status: "success",
            message: "Book marked Not Favourite!",
        });
    } catch (err) {
        res.json({
            status: "error",
            message: "Error marking Not Favourite!",
        });
    }
};
