const express= require('express');
const { route } = require('express/lib/application');

const patientControllers=require('../controllers/patients-controller');
const usersControllers=require('../controllers/users-controller');

const router =express.Router();


router.get('/',usersControllers.getUsers);

router.post('/signup',usersControllers.signup);

router.post('/login',usersControllers.login);


module.exports = router;