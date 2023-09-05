var express = require('express');
var router = express.Router();
const validateRequest = require('../middleware/validations/dataValidator');
const Validation = require('../middleware/validations/userValidation');
let dealerStocks = require("../controllers/dealerStocksController")

router.post("/create", dealerStocks.create);
router.get("/get/:id", dealerStocks.getDealerStocks);

module.exports = router;
