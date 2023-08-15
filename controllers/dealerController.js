const sendResponse = require("../middleware/setResponse");
const {messages,response} =  require("../locales/en.json");
const dealerCommon = require("../utils/dealerCommon");

exports.registration =  async(req,res,next)=>{
  try {
    req.body['dealer_code'] = req.body.mob_no;
    let mob_no =  req.body.mob_no;
    let user  =  await dealerCommon.checkExistingUser(mob_no)
    if(!user){
          createUser = await dealerCommon.createUserRecord(req.body)
          res.status(response.success).send(sendResponse(true,messages.register_success,createUser));
      }
      else{
        res.status(response.bad_request).send(sendResponse( false,messages.mob_already_exist));
      }     
  } catch (error) {
    console.log(error);
    res.status(response.bad_request).send(sendResponse(messages.went_wrong));
  }
}

exports.getAllDealers =  async(req,res,next)=>{
    try {
        getAllData = await dealerCommon.getAllDealer();
        res.status(response.success).send(sendResponse(true, messages.data_fetched, getAllData));
      } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
      }
}

exports.deleteDealer =  async(req,res,next)=>{
    try {
        let id = req.params.id;
        data = await dealerCommon.deleteDealer(id)
        res.status(response.success).send(sendResponse(true, messages.data_deleted, data));
      } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
      }
}

exports.updateDealer =  async(req,res,next)=>{
    try {
        if(req.body.mob_no){
            req.body['dealer_code'] = req.body.mob_no;
            let mob_no =  req.body.mob_no;
            let user  =  await dealerCommon.checkExistingUser(mob_no)
            if(!user){
                data = await dealerCommon.updateDealer(req.body, req.body.id)
                res.status(response.success).send(sendResponse(true, messages.data_updated, data));
              }
              else{
                res.status(response.bad_request).send(sendResponse( false,messages.mob_already_exist));
              }     

        } else {
            data = await dealerCommon.updateDealer(req.body, req.body.id)
            res.status(response.success).send(sendResponse(true, messages.data_updated, data));
        }

      } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
      }
}

  