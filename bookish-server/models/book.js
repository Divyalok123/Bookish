const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');
const path = require('path');
const BOOK_PATH = '/public/books'; //book storage path
const THUMB_PATH = '/public/thumbs'; //thumbnail storage path
const {v4: uuidv4} = require('uuid');

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pdflink: {
        type: String,
        required: true
    },
    bookimg: {
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
        if(file.fieldname === "book_file_input")
            cb(null, path.join(__dirname, '..', BOOK_PATH));
        else
            cb(null, path.join(__dirname, '..', THUMB_PATH));
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const filetypes = file.fieldname === "book_file_input" ? /pdf/ : /jpeg|jpg|png|svg|gif/;
    const extension = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extension) {
        cb(null, true);
    } else {
        cb("File type not supported!", false);
    }
}

bookSchema.statics.multerUpload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    },
    fileFilter: fileFilter
}).fields(
    [
      { 
        name: 'book_image_input', 
        maxCount: 1 
      }, 
      { 
        name: 'book_file_input', 
        maxCount: 1 
      }
    ]
);

bookSchema.statics.bookPath = BOOK_PATH;
bookSchema.statics.thumbPath = THUMB_PATH;

const Book = mongoose.model('Book', bookSchema);
module.exports = Book