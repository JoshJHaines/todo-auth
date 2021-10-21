const { validateCreateUser } = require("./authCreateMiddleware/validateCreateUser");
const { validateLoginData } = require("./authLoginMiddleware/validateLoginData")
const { checkIsUndefined } = require("./authLoginMiddleware/checkIsUndefined")
const { checkIsEmpty} = require("./authLoginMiddleware/checkIsEmpty");


module.exports = {
	validateCreateUser,
	validateLoginData,
	checkIsUndefined,
	checkIsEmpty
};
