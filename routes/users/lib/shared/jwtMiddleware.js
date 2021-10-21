const jwt = require("jsonwebtoken");

async function jwtMiddleware(req, res, next) {
	try {
		if (req.headers && req.headers.authorization) {
			let notDecodedToken = req.headers.authorization;
			let slicedToken = notDecodedToken.slice(7);
			let decodedToken = jwt.verify(slicedToken, process.env.JWT_SECRET);

			//* need to find the token in headers and slice off the 'Bearer '
			res.json({ message: "SUCCESSSSS", token: decodedToken });
		} else {
			throw { message: "You do not have permission. None Shall Pass!!!" };
		}
	} catch (error) {
		res.status(500).json({ message: "error", error: error.message });
	}
}

module.exports = {
	jwtMiddleware,
};
