var {dealer} = require("../models/dbConfig");
class Common{
    constructor(){}

    // check the existing user in User table
    createUserRecord(user){
        return new Promise((resolve, reject) => {
            
            try {
                dealer.create(user).then(user => {
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

    getAllDealer(){
        return new Promise((resolve, reject) => {
            try {
                dealer.findAll().then(user => {
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

    deleteDealer(id){
        return new Promise((resolve, reject) => {
            try {
                dealer.destroy({
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

    updateDealer(obj, id){
        return new Promise((resolve, reject) => {
            try {
                dealer.update(
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