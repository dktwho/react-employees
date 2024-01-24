const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth')
const {all, add, remove, edit, getEmployee} = require("../controllers/employees");

// api/employees
router.get('/', auth, all)

// api/employees/:id
router.get('/:id', auth, getEmployee)

// api/employees/add
router.post('/add', auth, add)

// api/employees/remove/:id
router.post('/remove/:id', auth, remove)

// api/employees/edit/:id
router.put('/put/:id', auth, edit)

module.exports = router
