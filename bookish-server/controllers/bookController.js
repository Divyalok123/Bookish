const Book = require("../models/book");
const User = require("../models/user");
const multer = require("multer");

module.exports.addBook = async (req, res) => {
    const newBook = Object.create(null);

    try {
        Book.multerUpload(req, res, (err) => {
            if (err) {
                console.log("Error: ", err);
                res.json({
                    status: "error",
                    message: "Error occured while uploading file!",
                });
                return;
            }

            if (req.files.book_image_input && req.files.book_image_input.length) {
                newBook.bookimg = Book.thumbPath + "/" 
                                    + req.files.book_image_input[0].filename.split(" ").join("-");
            } else {
                console.log("No book file provided");
            }

            if (req.files.book_file_input && req.files.book_file_input.length) {
                newBook.pdflink = Book.bookPath + "/" 
                                    + req.files.book_file_input[0].filename.split(" ").join("-");
            } else {
                console.log("No book image provided");
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

                    if (data.userid) {
                        const userId = data.userid;
                        const user = await User.findById(userId);
                        user.mybooks.push(book.id);
                        user.save();
                    } else {
                        console.log("No user to add the book to, bookController.");
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

            console.log("Book created");
        });
    } catch (err) {
        console.log("Error: ", err);
        res.json({
            status: "error",
            message: "Error occured while uploading!",
        });
    }
};

module.exports.getAll = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        // console.log("From book controller getAll: ", allBooks);
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

module.exports.handleFavourite = async (req, res) => {
    try {
        const userId = req.body.userid;
        const bookId = req.body.bookid;
        const user = await User.findById(userId);

        if(user.favourites.includes(bookId))
            user.favourites.pull(bookId);
        else
            user.favourites.push(bookId);

        user.save();

        res.json({
            status: "success",
            message: "Book marked Favourite!",
            user
        });
    } catch (err) {
        console.log("Error (handleFavourite): ", err);
        res.json({
            status: "error",
            message: "Error marking favourite!",
        });
    }
};

