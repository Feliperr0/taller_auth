import { Schema, model } from 'mongoose';

let collection = 'Bill';

let schema = new Schema({

    description: { type: String, required: true },
    amount: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },

}, {
    timestamps: true
});

let Bill = model(collection, schema);

export default Bill;