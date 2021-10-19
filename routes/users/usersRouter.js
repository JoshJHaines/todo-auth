var express = require("express");
var router = express.Router();

const { createUser, deleteUserById } = require("./controller/userController");

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

/*********************
 * DELETE USERS PAGE *
 *********************/
 router.delete("/delete-user-by-id/:id", deleteUserById);

module.exports = router;
