const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    photo: {
        type: String,
        required: false,
    },
    user: { 
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Item = model('Item', itemSchema);

module.exports = Item;