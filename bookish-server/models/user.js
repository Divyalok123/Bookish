const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: String,
    about: String,
    title: String,
    favourites: {
        type: [Schema.Types.ObjectId],
        default: []
    },
    likes: {
        type: [String],
        default: []
    },
    otherprofiles: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;