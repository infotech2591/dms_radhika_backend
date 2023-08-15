const Joi = require('joi');

propertyValidationSchema = {

    addValidation:Joi.object({
        colony_name:Joi.string().trim().required().label("Colony Name"),
        // colonyLatandLng:Joi.array().items(Joi.object()
        // .keys({
        //     lng:Joi.number().required().label("Longitude"),
        //     lat:Joi.number().required().label("Latitude"),
        // })).required(),
        longitude:Joi.number().required().label("Longitude"),
        latitude:Joi.number().required().label("Latitude"),
        city:Joi.string().trim().required(),
        zip_code:Joi.number().required(),
        rate:Joi.number().required(),
        plot_length:Joi.number().required(),
        plot_width:Joi.number().required(),
        campus:Joi.boolean().required(),
        builder:Joi.array().items(Joi.object()
        .keys({
          name:Joi.string().trim().required().label("Name"),
          address:Joi.string().trim().required().label("Address"),
        })).required(),
        colony_landmark:Joi.array().items(Joi.object().keys({
         address:Joi.string().trim().required().label("Address"),
        })).required(),
        guideline_rate:Joi.number().required(),
        rating:Joi.number().required(),
        broker:Joi.array().items(Joi.object()
        .keys({
          name:Joi.string().trim().required().label("Name"),
          contact:Joi.string().required().label("Contact"),
        })).required(),
    })
  
}
module.exports = propertyValidationSchema;