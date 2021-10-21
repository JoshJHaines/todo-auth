var express = require("express");
var router = express.Router();
const { isAlpha, isAlphanumeric, isInt } = require("validator");
var { jwtMiddleware } = require("../users/lib/shared/jwtMiddleware");

const Todo = require("./model/Todo");
const Users = require("../users/model/Users");
const errorHandler = require("../utils/errorHandler/errorHandler");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.json({
		message: "SUCCESS",
		page: "This would be your ToDo page",
	});
});

router.post("/create-todo", jwtMiddleware, async function (req, res) {
	try {
		const { todo, todoOwner, done } = req.body;

		let errObj = {};

		if (!isAlpha(todo)) {
			errObj.todo = "Alphabet ONLY!!!";
		}
		if (Object.keys(errObj).length > 0) {
			return res.status(500).json({
				message: "error",
				error: errObj,
			});
		} else {
			const decodedData = res.locals.decodedData;
			
			let foundUser = await Users.findOne({ email: decodedData.email });
			
			const createdTodo = new Todo({
				todo: req.body.todo,
				todoOwner: foundUser._id,
			});

			let savedTodo = await createdTodo.save();

			foundUser.todos.push(savedTodo._id)
			await foundUser.save()
			res.json({
				message: "SUCCESS",
				Todo: savedTodo,
				User: foundUser
			});
		}
	} catch (e) {
		res.status(500).json({
			message: "You didn't do it right",
			error: errorHandler(e),
		});
	}
});

module.exports = router;
