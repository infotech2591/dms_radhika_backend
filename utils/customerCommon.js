var {customer} = require("../models/dbConfig");
class Common{
    constructor(){}

    // check the existing user in User table
    createUserRecord(user){
        return new Promise((resolve, reject) => {
            
            try {
                customer.create(user).then(user => {
                    if(user){
                        resolve(user.dataValues)
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

    checkExistingUser(mob_no){
        return new Promise((resolve, reject) => {
            try {
                dealer.findOne({
                    where: {
                        mob_no: mob_no,
                    }
                  }).then(user => {
                    if(user){
                        resolve(user.dataValues)
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

    checkExistingUserFromID(user_Id){
        return new Promise((resolve, reject) => {
            try {
                User.findOne({
                    where: {
                      id: user_Id
                    }
                  }).then(user => {
                    if(user){
                        resolve(user.dataValues)
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

    getAllCustomer(){
        return new Promise((resolve, reject) => {
            try {
                customer.findAll().then(user => {
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

    getCustomer(dealer_id){
        return new Promise((resolve, reject) => {
            try {
                customer.findAll({
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

    deleteCustomer(id){
        return new Promise((resolve, reject) => {
            try {
                customer.destroy({
                    where:{
                        id
                    }
                }).then(user => {
                    resolve(user)
    
                  })
            } catch (error) {
                
                reject(error)
            }
          
        })
    }

    updateCustomer(obj, id){
        return new Promise((resolve, reject) => {
            try {
                customer.update(
                    obj,
                     { where: { id } }
                   )
                     .then(user => {
                        resolve(user)
                  })
            } catch (error) {
                
                reject(error)
            }
          
        })
    }
  
}
module.exports=new Common()