function checkIsEmpty(req, res, next) {
	if (Object.keys(req.body).length === 0) {
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
    checkIsEmpty
}