var express = require("express");
var router = express.Router();

const { createUser } = require("./controller/userController");

/*******************
 * MAIN USERS PAGE *
 *******************/
router.get("/", function (req, res, next) {
	res.json({
		message: "SUCCESS",
		page: "This would be your USERS page",
	});
});

/*********************
 * CREATE USERS PAGE *
 *********************/
router.post(
	"/create-user",
	// checkIsUndefined,
	// checkIsEmpty,
	// validateCreateData,
	createUser
);

module.exports = router;
