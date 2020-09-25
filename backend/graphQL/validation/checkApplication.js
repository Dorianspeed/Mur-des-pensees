// Importation de la dépendance
const Joi = require('joi');

module.exports = Joi.object({
    application_id: Joi.number().integer().min(1).required(),
    user_id: Joi.number().integer().min(1).required()
}).required();