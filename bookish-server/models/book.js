const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');
const path = require('path');
const BOOK_PATH = '/public/books';

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pdflink: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: [String]
}, {
    timestamps: true
}); 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', BOOK_PATH));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.replace(/\.[^/.]+$/, "") + '-' + Date.now() + path.extname(file.originalname));
    }
});

bookSchema.statics.multerUpload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    },
    fileFilter: function(req, file, cb) {
        const filetypes = /pdf/;
        const extension = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if(mimetype && extension) {
            cb(null, true);
        } else {
            cb("Only pdfs are allowed!", false);
        }
    }
}).single('book_file_input');

bookSchema.statics.bookPath = BOOK_PATH;

const Book = mongoose.model('Book', bookSchema);
module.exports = Book