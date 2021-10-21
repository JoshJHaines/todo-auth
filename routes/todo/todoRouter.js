var express = require("express");
var router = express.Router();
const {
	isAlpha,
	isAlphanumeric,
	isInt
} = require("validator");
var {jwtMiddleware} = require("../users/lib/shared/jwtMiddleware")

/* GET home page. */
router.get("/", function (req, res, next) {
	res.json({
		message: "SUCCESS",
		page: "This would be your ToDo page",
	});
});

router.post("/create-todo", jwtMiddleware, function (req, res) {
	const { todo, todoOwner, done } = req.body
	
	let errObj = {}

	if (!isAlpha(todo)) {
		errObj.todo = "Alphabet ONLY!!!"
	}
	if (Object.keys(errObj).length > 0) {
		return res.status(500).json({
			message: "error",
			error: errObj,
		});
	} else {
		res.json({
			message: "SUCCESS",
			page: "you didn't get an error",
		});
	}
})

module.exports = router;
