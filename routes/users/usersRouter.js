var express = require("express");
var router = express.Router();

// const { getAllUser } = require("./controller/userController");
/* GET users listing. */

router.get("/", function (req, res, next) {
	res.json({
		message: "SUCCESS",
		page: "This would be your USERS page",
	});
});

module.exports = router;
