var express = require('express');
var router = express.Router();
const validateRequest = require('../middleware/validations/dataValidator');
const Validation = require('../middleware/validations/userValidation');
let dealerController = require("../controllers/dealerController")

router.post("/register",
  validateRequest(Validation.registerValidation),
  dealerController.registration
);

// router.put("/updateDealer",
//   validateRequest(Validation.updateValidation),
//   dealerController.updateDealer
// );

router.get("/getAllDealers",
  dealerController.getAllDealers
);

router.delete("/deleteDealer/:id",
  dealerController.deleteDealer
);
module.exports = router;
