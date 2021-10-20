var express = require("express");
var router = express.Router();
/************************************
 * IMPORT FUNCTIONS FROM CONTROLLER *
 ************************************/
const { createUser, deleteUserById } = require("./controller/userController");

/****************************
 * IMPORT FUNTIONS FROM LIB *
 ****************************/
const { validateCreateUser, validateLoginData } = require("./lib")
/******************************
 * CRUD ROUTES WITH FUNCTIONS *
 ******************************/

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
	validateCreateUser,
	createUser
);

/*********************
 * DELETE USERS PAGE *
 *********************/
router.delete("/delete-user-by-id/:id", deleteUserById);

/**************************************
 * EXPORT ROUTER TO BE USED ELSEWHERE *
 **************************************/
module.exports = router;
