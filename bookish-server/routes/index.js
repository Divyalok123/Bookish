const express = require('express');
const router = express.Router();
const {createUser, login} = require('../controllers/registrationController');
const { addBook, getAll, handleFavourite } = require('../controllers/bookController');
const { updateProfile, getUserBooks} = require('../controllers/userController');

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
router.post('/handlefavourite', handleFavourite);

//get books of a user
router.get('/getuserbooks', getUserBooks)

//get books marked favourite
router.get('/getfavourites', getUserBooks)

module.exports = router;