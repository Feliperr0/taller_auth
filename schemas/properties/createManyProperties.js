import Joi from 'joi';

const propertySchema = Joi.object({
    type: Joi.string().required().messages({
        'string.empty': 'Type is required',
        'any.required': 'Type is required'
    }),
    value: Joi.number().required().messages({
        'number.base': 'Value must be a number',
        'any.required': 'Value is required'
    }),
    user: Joi.string().pattern(new RegExp('^[0-9a-fA-F]{24}$')).required().messages({
        'string.pattern.base': 'User must be a valid ObjectId',
        'any.required': 'User is required'
    })
});

const schema = Joi.array().items(propertySchema);

export default schema;








