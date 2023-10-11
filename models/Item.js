const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    code: {
        type: Number,
        required: false,
        default: 0
    },
    name: {
        type: String,
        required: false,
        default: 'product'
    },
    price: {
        type: Number,
        required: false,
        default: 0
    },
    explanation: {
        type: String,
        required: false,
        default: ''
    },
    color: {
        type: Array,
        required: false,
        default: []
    },
    category: {
        type: Number,
        required: false,
        default: 1,
    },
    img: {
        type: Array,
        required: false,
        default: [],
    },
    best: {
        type: Boolean,
        required: false,
        default: false,
    },
    sale: {
        type: Boolean,
        required: false,
        default: false,
    }
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

//카테고리 1은 TOP, 2는 TROUSERS, 3은 OUTER ,4는 ACC