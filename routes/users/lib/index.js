// const { checkIsEmpty } = require("./shared/checkIsEmpty");
// const { checkIsUndefined } = require("./shared/checkIsUndefined");
const {
	validateLoginData,
} = require("./authLoginMiddleware/validateLoginData");

const { validateCreateUser } = require("./authMiddleware/validateCreateUser");

module.exports = {
	// checkIsEmpty,
	// checkIsUndefined,
	validateLoginData,
	validateCreateUser,
};
