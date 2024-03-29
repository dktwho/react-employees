const express = require('express');
const router = express.Router();
const {login, register, current} = require('../controllers/users')
const { auth } = require('../middlewares/auth')

/* GET users listing. */

// api/user/login
router.post('/login', login);

// api/user/register
router.post('/register', register);

// api/user/current
router.get('/current', auth, current);

module.exports = router;

// 1.26.49
