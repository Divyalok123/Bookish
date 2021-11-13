const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = '/public/avatars';

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
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: null
    },
    about: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null
    },
    favourites: {
        type: [String],
        default: []
    },
    likes: {
        type: [String],
        default: []
    },
    otherprofiles: {
        type: Object,
        default: []
    }
}, {
    timestamps: true
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.replace(/\.[^/.]+$/, "") + '-' + Date.now() + path.extname(file.originalname));
    }
})

userSchema.statics.multerUpload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|svg|gif/;
        const extension = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if(mimetype && extension) {
            cb(null, true);
        } else {
            cb("File type not supported", false);
        }
    }
}).single('profile_img_input');

userSchema.statics.avatarPath = AVATAR_PATH;

const User = mongoose.model('User', userSchema);
module.exports = User;