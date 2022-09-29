const express = require('express');

const router = express.Router();
const {getUser, register, login}     =  require("../Controllers/UserController");

router.get("/users",getUser)

router.post("/register",register);

router.post("/login",login);

module.exports = router;