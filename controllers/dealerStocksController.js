const sendResponse = require("../middleware/setResponse");
const { messages, response } = require("../locales/en.json");
const dealerStocksCommon = require("../utils/dealerStocksCommon");

exports.create = async (req, res, next) => {
    try {
        let body;
        for(let i=0; i<req.body.stocks.length; i++){
            body = req.body.stocks[i]
            body['dealer_id'] = req.body.dealer_id;
            body['dealer_code'] = req.body.dealer_code;
            createData = await dealerStocksCommon.createRecord(body)
        }
        res.status(response.success).send(sendResponse(true, messages.register_success));

    } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
    }
}

exports.getDealerStocks = async (req, res, next) => {
    try {
        let id = req.params.id;
        createData = await dealerStocksCommon.getDealerStocks(id)
        res.status(response.success).send(sendResponse(true, messages.register_success, createData));

    } catch (error) {
        console.log(error);
        res.status(response.bad_request).send(sendResponse(messages.went_wrong));
    }
}
