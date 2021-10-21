const jwt = require("jsonwebtoken");

async function jwtMiddleware(req, res, next) {
	try {
        console.log(req.headers.authorization);
        //* need to find the token in headers and slice off the 'Bearer '
		let decodedToken = jwt.verify(req.headers.authorization.slice(7), process.env.JWT_SECRET);
		res.json({ message: "SUCCESSSSS", token: decodedToken });
	} catch (error) {
		res.status(500).json({ message: "error", error: error.message });
	}
}

module.exports = {
	jwtMiddleware,
};
