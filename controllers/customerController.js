const sendResponse = require("../middleware/setResponse");
const {messages,response} =  require("../locales/en.json");
const customerCommon = require("../utils/customerCommon");

exports.registration =  async(req,res,next)=>{
  try {
    req.body['customer_code'] = `CUST_${req.body.mob_no}`;

    createUser = await customerCommon.createUserRecord(req.body)
    res.status(response.success).send(sendResponse(true,messages.register_success,createUser));   
  } catch (error) {
    console.log(error);
    res.status(response.bad_request).send(sendResponse(messages.went_wrong));
  }
}

exports.getAllCustomers =  async(req,res,next)=>{
    try {
        getAllData = await customerCommon.getAllCustomer();
        res.status(response.success).send(sendResponse(true, messages.data_fetched, getAllData));
      } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
      }
}

exports.getCustomer =  async(req,res,next)=>{
    try {
        let dealer_id = req.params.dealer_id;
        getAllData = await customerCommon.getCustomer(dealer_id);
        res.status(response.success).send(sendResponse(true, messages.data_fetched, getAllData));
      } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
      }
}

exports.deleteCustomer =  async(req,res,next)=>{
    try {
        let id = req.params.id;
        data = await customerCommon.deleteCustomer(id)
        res.status(response.success).send(sendResponse(true, messages.data_deleted, data));
      } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
      }
}

exports.updateCustomer =  async(req,res,next)=>{
    try {
        if(req.body.mob_no){
            req.body['customer_code'] = `CUST_${req.body.mob_no}`;
            data = await customerCommon.updateCustomer(req.body, req.body.id)
            res.status(response.success).send(sendResponse(true, messages.data_updated, data)); 

        } else {
            data = await customerCommon.updateCustomer(req.body, req.body.id)
            res.status(response.success).send(sendResponse(true, messages.data_updated, data));
        }

      } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
      }
}

exports.uploadBill =  async(req,res,next)=>{
    try {
      console.log(req.body);
      let file = {bill_attachment:req.files[0].filename};
      data = await customerCommon.updateCustomer(file, req.params.id);
      res.status(response.success).send(sendResponse(true, messages.data_updated, data)); 
      } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
      }
}

  