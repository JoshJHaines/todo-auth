const bcrypt = require("bcryptjs");
const validator = require("validator");
const User = require("../model/User");

async function getAllUser(req, res) {
	try {
		// let fetchedUser = await User.find({});

		res.json({ message: "success", message2: "This is working" });
	} catch (error) {
		res.status(500).json({
			message: "you have failed",
			error: error.message,
		});
	}
}

module.exports = {
	getAllUser,
};
