// Importation de la dépendance
const Joi = require('joi');

module.exports = Joi.object({
    id: Joi.number().integer().min(1).required()
}).required();