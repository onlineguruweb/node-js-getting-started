const express = require('express');

const router = express.Router();
const {getUser}     =  require("../Controllers/UserController");

router.get("/",getUser)

module.exports = router;