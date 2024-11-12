import { Schema, model } from 'mongoose';

let collection = 'Property';

let schema = new Schema({

    type: { type: String, required: true },
    value: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },

}, {
    timestamps: true
});

let Property = model(collection, schema);

export default Property;