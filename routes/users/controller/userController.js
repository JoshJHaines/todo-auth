const bcrypt = require("bcryptjs");
const validator = require("validator");
const User = require("../model/Users");

async function createUser(req, res) {
	const { firstName, lastName, username, email, password } = req.body;

	try {
		let salt = await bcrypt.genSalt(10);
		let hashedPassword = await bcrypt.hash(password, salt);

		const createdUser = new User({
			firstName,
			lastName,
			username,
			email,
			password: hashedPassword,
		});

		let savedUser = await createdUser.save();

		res.json({ message: "success", payload: savedUser });
	} catch (error) {
		res.status(500).json({ message: "error", error: error.message });
	}
}
async function deleteUserById(req, res) {
	try {
		let deletedUser = await Users.findByIdAndDelete(req.params.id);

		res.json({ message: "success", payload: deletedUser });
	} catch (error) {
		res.status(500).json({
			message: "you have failed",
			error: error.message,
		});
	}
}

module.exports = {
    createUser,
    deleteUserById
};
