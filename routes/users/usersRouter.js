const jwt = require("jsonwebtoken")
var express = require("express");
var router = express.Router();
/************************************
 * IMPORT MIDDLEWARE FROM CONTROLLER *
 ************************************/
const {
	createUser,
	deleteUserById,
	login,
	updateUser
} = require("./controller/userController");

/*****************************
 * IMPORT MIDDLEWARE FROM LIB *
 *****************************/
const {
	validateCreateUser,
	validateLoginData,
	validateUpdateData,
	checkIsUndefined,
	checkIsEmpty,
	jwtMiddleware
} = require("./lib");

/******************************
 * CRUD ROUTES WITH FUNCTIONS *
 * VVVVVVVVVVVVVVVVVVVVVVVVVV *
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
	checkIsUndefined,
	checkIsEmpty,
	validateCreateUser,
	createUser
);

/*********************
 * DELETE USERS PAGE *
 *********************/
router.delete("/delete-user-by-id/:id", deleteUserById);

/**************
 * LOGIN USER *
 **************/
router.post(
	"/login",
	checkIsUndefined,
	checkIsEmpty,
	validateLoginData,
	login
);

/*************************
 * USER PROFILE WITH JWT *
 *************************/

router.put(
	"/profile",
	jwtMiddleware,
	checkIsUndefined,
	checkIsEmpty,
	validateUpdateData,
	updateUser
)
/**************************************
 * EXPORT ROUTER TO BE USED ELSEWHERE *
 **************************************/
module.exports = router;
