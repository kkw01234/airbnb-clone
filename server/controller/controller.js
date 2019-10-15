var express = require('express');
var router = express.Router();
const indexRouter = require('../routes/index');
router.use("/",indexRouter);
module.exports = router;