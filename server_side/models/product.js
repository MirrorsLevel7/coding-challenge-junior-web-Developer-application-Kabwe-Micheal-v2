const mongoose = require('mongoose');

//defining our product schema
const productSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true
    }, 

    description: {
        type: String,
        required: true
    },
    image: String,
    price:{
        type: Number,
        required: true,
        min: 0
    },
    category:{
        type: String,  
        enum: ['furniture', 'electronics', 'clothing']
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;