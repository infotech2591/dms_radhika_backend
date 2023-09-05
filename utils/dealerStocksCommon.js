var {dealerStock} = require("../models/dbConfig");
class Common{
    constructor(){}

    // check the existing user in User table
    createRecord(data){
        return new Promise((resolve, reject) => {
            
            try {
                dealerStock.create(data).then(res => {
                    if(res){
                        resolve(res.dataValues)
                    }
                    else{
                        reject(false);
                    }
                  }).catch(err => {
                    reject(err)
                  });   
            } catch (error) {
                reject(false);
            }
        })
    }

    getDealerStocks(dealer_id){
        return new Promise((resolve, reject) => {
            try {
                dealerStock.findAll({
                    where: {
                        dealer_id,
                    }
                }).then(user => {
                    if(user){
                        resolve(user)
                    }
                    else{
                        resolve(false)
                    }
    
                  })
            } catch (error) {
                
                reject(error)
            }
          
        })
    }
  
}
module.exports=new Common()