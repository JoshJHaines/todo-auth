const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../model/Users");
const errorHandler = require("../../utils/errorHandler/errorHandler")

/*******************
 * ASYNC FUNCTIONS *
 *******************/
async function createUser(req, res) {
	const { firstName, lastName, username, email, password } = req.body;

	try {
		let salt = await bcrypt.genSalt(10);
		let hashedPassword = await bcrypt.hash(password, salt);

		const createdUser = new Users({
			firstName,
			lastName,
			username,
			email,
			password: hashedPassword,
		});

		let savedUser = await createdUser.save();

		res.json({ message: "success", payload: savedUser });
	} catch (error) {
		res.status(500).json({ message: "Well, That did NOT work!!!", error: errorHandler(error) });
	}
}
async function deleteUserById(req, res) {
	try {
		let deletedUser = await Users.findByIdAndDelete(req.params.id);

		res.json({ message: "success", payload: deletedUser });
	} catch (error) {
		res.status(500).json({
			message: "you have failed",
			searchedId: req.params.id,
			error: error.message,
		});
	}
}
async function login(req, res) {
	const { email, password } = req.body;

	try {
		let foundUser = await Users.findOne({ email: email });
		if (!foundUser) {
			return res.status(500).json({
				message: "error",
				error: "please go sign up",
			});
		} else {
			let comparedPassword = await bcrypt.compare(
				password,
				foundUser.password
			);

			if (!comparedPassword) {
				return res.status(500).json({
					message: "error",
					error: "Please check your email and password",
				});
			} else {
				let jwtToken = jwt.sign(
					{
						email: foundUser.email,
						username: foundUser.username,
					},
					process.env.JWT_SECRET,
					{ expiresIn: "24h" }
				);

				res.json({
					message: "success",
					payload: { JWT: jwtToken }, //* gen would not need to be an object
					User: foundUser, //! only adding this for learning to see who was found. Would not want to expose in real app.
				});
			}
		}
	} catch (e) {
		res.status(500).json({ message: "error", error: e.message });
	}
}
async function updateUser(req, res) {
	try {
		const { password } = req.body;

		const decodedData = res.locals.decodedData;

		let salt = await bcrypt.genSalt(10);
		let hashedPassword = await bcrypt.hash(password, salt);

		req.body.password = hashedPassword;

		let updatedUser = await Users.findOneAndUpdate(
			{ email: decodedData.email },
			req.body,
			{ new: true }
		);

		res.json({
			message: "success",
			payload: updatedUser,
		});
	} catch (e) {
		res.status(500).json({ message: "error", error: e.message });
	}
}

/****************************
 * EXPORT FOR USE IN ROUTER *
 ****************************/
module.exports = {
	createUser,
	deleteUserById,
	login,
	updateUser,
};
