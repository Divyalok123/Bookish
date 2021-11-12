const express = require('express');
const router = express.Router();
const {createUser, login} = require('../controllers/registrationController');

router.get('/', (req, res) => {
    res.json({
        "status": "working"
    });
});

router.post('/signin', login);

router.post('/signup', createUser);

module.exports = router;