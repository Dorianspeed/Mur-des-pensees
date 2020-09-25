// Importation de la dépendance
const Joi = require('joi');

module.exports = Joi.object({
    content: Joi.string().required(),
    user_id: Joi.number().integer().min(1).required(),
}).required();