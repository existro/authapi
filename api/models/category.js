const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Categories = mongoose.model('Category',new Schema({
    name: String,
    desc: String,
}))
module.exports = Categories