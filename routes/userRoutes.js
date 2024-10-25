const express = require("express");
const { currentUser, loginUser, registerUser } = require("../controller/userController");
const validateToken = require("../middleware/validationTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
