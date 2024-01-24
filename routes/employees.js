const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth')
const {all, add} = require("../controllers/employees");

// api/employees
router.get('/', auth, all)

// api/employees/:id
router.get('/:id', auth, () => console.log('get single employee to id'))

// api/employees/add
router.post('/add', auth, add)

// api/employees/remove/:id
router.post('/remove/:id', auth, () => console.log('remove employee'))

// api/employees/edit/:id
router.put('/put/:id', auth, () => console.log('edit employee'))

module.exports = router
