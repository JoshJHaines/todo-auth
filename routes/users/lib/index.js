const {
	validateCreateUser,
} = require("./authCreateMiddleware/validateCreateUser");
const {
	validateLoginData,
} = require("./authLoginMiddleware/validateLoginData");
const {
	validateUpdateData,
} = require("./authUpdateMiddlware/validateUpdateData");
const { checkIsUndefined } = require("./shared/checkIsUndefined");
const { checkIsEmpty } = require("./shared/checkIsEmpty");
const { jwtMiddleware } = require("./shared/jwtMiddleware");

module.exports = {
	validateCreateUser,
	validateLoginData,
	validateUpdateData,
	checkIsUndefined,
	checkIsEmpty,
	jwtMiddleware,
};
