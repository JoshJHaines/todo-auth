function checkIsUndefined(req, res, next) {
	if (req.body === undefined) {
		return res
			.status(500)
			.json({
				message: "you have failed",
				error: "Please fill out form",
			});
	} else {
		next();
	}
}

module.exports = {
    checkIsUndefined
}
