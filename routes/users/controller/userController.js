const bcrypt = require("bcryptjs");
const validator = require("validator");
const User = require("../model/User");

// async function getAllUser(req, res) {
// 	res.json({
//         message: "SUCCESS",
//         page: "This would be your USERS page",
//       });
    // try {
	// 	// let fetchedUser = await User.find({});

	// 	res.json({ message: "success", page: "This would be your get All Users Page" });
	// } catch (error) {
	// 	res.status(500).json({
	// 		message: "you have failed",
	// 		error: error.message,
	// 	});
	// }
}

module.exports = {
	getAllUser,
};
