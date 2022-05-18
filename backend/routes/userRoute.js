const express = require('express');
const {getUserProfile,authUser, registerUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
const router = express.Router();
router.post('/login',authUser)
router.route('/profile').get(protect,getUserProfile)
router.post('/',registerUser)

module.exports = router;