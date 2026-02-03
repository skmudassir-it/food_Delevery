const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');


const { authUserMiddleware } = require('../middlewares/auth.middleware');
const upload = require('../middlewares/multer.middleware');


router.post('/user/register', authController.registerUser);
router.post('/user/login', authController.loginUser);
router.get('/user/logout', authController.logoutUser);
router.put('/user/update', authUserMiddleware, upload.single('profilePic'), authController.updateUser);

router.post('/foodpartner/register', authController.registerFoodPartner);
router.post('/foodpartner/login', authController.loginFoodPartner);
router.get('/foodpartner/logout', authController.logoutFoodPartner);

module.exports = router;
