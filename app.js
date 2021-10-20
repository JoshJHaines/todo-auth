/*****************
 * BRING IN .ENV *
 *****************/
require("dotenv").config();
/*****************************
 * IMPORT INSTALLED PACKAGES *
 *****************************/
var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
/**************************
 * CONNECT APP TO ROUTERS *
 **************************/
var indexRouter = require("./routes/main/index");
var usersRouter = require("./routes/users/usersRouter");
/***********************
 * CONNECT TO DATABASE *
 ***********************/
mongoose
	.connect(process.env.MONGO_DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("MONGODB CONNECTED");
	})
	.catch(() => {
		console.log(e);
	});
/***********
 * SET APP *
 ***********/
var app = express();
/*********************************
 * HAVE APP USE EXPRESS PACKAGES *
 *********************************/
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/****************************************
 * HAVE APP USE ROUTERS WITH BASE ROUTES *
 ****************************************/
app.use("/", indexRouter);
app.use("/api/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
