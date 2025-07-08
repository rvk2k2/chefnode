const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/authMiddleware')
const { handleFavAdd, handleFavDelete, handleFavDetails} = require('../controllers/FavControllers')


router.get('/', verifyToken, handleFavDetails);
router.post('/add', verifyToken, handleFavAdd);
router.post('/remove', verifyToken, handleFavDelete);

module.exports = router;