const express=require('express');
const router = express.Router();

const { handleRegister, handleLogIn} = require("../controllers/authControllers")

//Routing
router.post('/register', handleRegister);
router.post('/login', handleLogIn);


module.exports = router;