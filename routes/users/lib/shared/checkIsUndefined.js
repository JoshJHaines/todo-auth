function checkIsUndefined(req, res, next) {
	if (req.body === undefined || Object.keys(req.body).length === 0) {
		return res.status(500).json({
			message: "you have failed",
			error: "Please fill out form",
		});
	} else {
		next();
	}
}

module.exports = {
	checkIsUndefined,
};
