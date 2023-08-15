const Joi = require('joi');

userValidationSchema = {

    registerValidation:Joi.object({
        email:Joi.string().email().trim().optional(),
        name:Joi.string().trim().required().label("Full name"),
        mob_no:Joi.string().trim().required().label("Mobile Number"),                                            
        address:Joi.string().trim().required().label("Address"),                                            
        shop_address:Joi.string().trim().required().label("Shop Address"),                                            
    }),

    updateValidation:Joi.object({
        id:Joi.number().required().label("id"),
        email:Joi.string().email().trim().optional(),
        name:Joi.string().trim().optional(),
        mob_no:Joi.string().trim().optional(),                                            
        address:Joi.string().trim().optional(),                                            
        shop_address:Joi.string().trim().optional(),                                            
    }),

    loginValidation:Joi.object({
        email:Joi.string().email().trim().required().label("Email"),
        password:Joi.string().trim().required().label("Password")
    }),
    forgetPasswordValidation: Joi.object({
        email: Joi.string().email().trim().required()
    }),
    verifyOtp:Joi.object({
        email: Joi.string().email().trim().required(),
        otp:Joi.number().required()
    }),
    resetPasswordValidation:Joi.object({
        email: Joi.string().email().trim().required().label("Email"),
        newPassword:Joi.string().trim().required().label("New Password"),
        confirmPassword:Joi.string().trim().required().label("Confirm Password")
    })
}
module.exports = userValidationSchema;