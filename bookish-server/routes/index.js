const express = require('express');
const router = express.Router();
const {createUser, login} = require('../controllers/registrationController');
const { addBook, getAll, markFavourite, markNotFavourite } = require('../controllers/bookController');
const { updateProfile} = require('../controllers/userController');

//registration routes
router.get('/', (req, res) => {
    res.json({
        "status": "working"
    });
});

router.post('/signin', login);
router.post('/signup', createUser);

//add a book to user's db
router.post('/addbook', addBook);

//update user profile
router.post('/updateprofile', updateProfile);

//get all books
router.get('/getall', getAll);

//mark book as favourite
router.post('/favourite', markFavourite);

//mark book as not favourite
router.post('/unfavourite', markNotFavourite);

module.exports = router;