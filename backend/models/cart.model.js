const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    date: {type: Date, required: true },
    userId: {type: String, require: true}
}, {
    timestamp: true,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;