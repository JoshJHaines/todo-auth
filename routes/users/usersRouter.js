var express = require('express');
var router = express.Router();

const { getAllUser } = require("./controller/userController")
/* GET users listing. */

router.get("/", getAllUser)

module.exports = router;
