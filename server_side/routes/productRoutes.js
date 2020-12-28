const express = require('express');
const router = express.Router();
const helpers = require('../helpers/index');


router.route('/')
//this route gets all the products from the database
.get(helpers.getProduct)
//this route posts or creates products to the database
.post(helpers.createProduct)

router.route('/:productId')
//this route retrieves or displays a product based on the id 
.get(helpers.retrieveProduct)
//this route updates the specified product or a product whose id matches with the provided productId in the params
.put(helpers.updateProduct)
//this route removes the product from the databse by the provided product id
.delete(helpers.removeProduct)

//in order to have access to the router object we have to export it
module.exports = router;