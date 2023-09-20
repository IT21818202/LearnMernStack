const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    itemName: { type: String, required: true },
    amout: { type: Int, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true }, 
    itemId: { type: string, required: true }
}, {
    timestamp: true,
});

const Oder = mongoose.model('Order', orderSchema);

module.exports = Order;