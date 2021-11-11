const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pdf: {
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

module.export = Book