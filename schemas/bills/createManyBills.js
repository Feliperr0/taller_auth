import Joi from "joi-oid";

const billSchema = Joi.object({
    description: Joi.string()
        .required()
        .messages({
            'string.empty': 'Description is required',
            'any.required': 'Description is required'
        }),
    amount: Joi.number()
        .required()
        .messages({
            'number.base': 'Amount must be a number',
            'any.required': 'Amount is required'
        }),
    user: Joi.string()
        .pattern(new RegExp('^[0-9a-fA-F]{24}$'))
        .required()
        .messages({
            'string.pattern.base': 'User must be a valid ObjectId',
            'any.required': 'User is required'
        })
});


const schema = Joi.array().items(billSchema);

export default schema;
