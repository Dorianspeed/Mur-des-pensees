// Importation de la dépendance
const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    image_url: Joi.string().uri({allowRelative: true, relativeOnly: true}).required(),
    category_id: Joi.number().integer().min(1).required(),
    user_id: Joi.number().integer().min(1).required()
}).required();