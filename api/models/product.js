const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Products = mongoose.model('Product',new Schema({
    name: String,
    desc: String,
    category_id: String,
    price_c: Number,
    price_v: Number,
    date_register: Date,
    date_update: Date,
    stock: Number,
}))
module.exports = Products