const express = require('express')
const router = express.Router()

const { createBlog } = require("../controllers/blogController")
const { verifyToken } = require("../middleware/authMiddleware");

router.post('/', verifyToken , createBlog)

module.exports = router;