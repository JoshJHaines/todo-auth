var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    message: "SUCCESS",
    page: "This would be your home page",
  });
});

module.exports = router;
