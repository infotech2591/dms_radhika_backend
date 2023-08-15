const i18n = require('i18n');
const jwt = require('jsonwebtoken');
const sendResponse = require("../middleware/setResponse");
const fs = require("fs");


exports.createJwtToken = (data, time) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: time
    });
}
exports.decodeJwtToken = async (req, res, next) => {
    try {
      const tokenHead = req.headers.authorization;
  
      if (tokenHead === undefined || tokenHead === null || tokenHead === "") {
        res.status(400).send(sendResponse(false,"Token missing."));
      } else {
        const token = tokenHead;
        const verified = jwt.verify(token,process.env.JWT_SECRET);
  
        if (verified) {
          req.id = verified.id;
            next();

        } else {
            res.status(404).send(sendResponse(false,"Token expired."));
        
        }
      }
    } catch (error) {
      console.log(error);
      res
      .status(404)
        .json({ status: false, message: "Invalid token." });
    }
  };
