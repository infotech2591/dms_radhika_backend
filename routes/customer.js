var express = require('express');
var router = express.Router();
const validateRequest = require('../middleware/validations/dataValidator');
const Validation = require('../middleware/validations/userValidation');
let customerController = require("../controllers/customerController")
const uploadFile = require('../middleware/upload_file');

router.post("/register",
  customerController.registration
);

router.put("/updateCustomer",
  customerController.updateCustomer
);

router.get("/getAllCustomers",
  customerController.getAllCustomers
);

router.get("/getCustomer/:dealer_id",
  customerController.getCustomer
);

router.delete("/deleteCustomer/:id",
  customerController.deleteCustomer
);

router.post("/uploadBill/:id", uploadFile,
  customerController.uploadBill
);
module.exports = router;
