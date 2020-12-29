const db = require('../models/index');

//this funtion loads all the products on the page
exports.getProduct = async(req, res)=>{
    try {
        //we wait for products to return
        const products = await db.Product.find({});
        //we return a json object
         res.status(200).json(products);

    } catch (error) {
         res.status(404).json({message: error.message});
    }
}

//this function creates the products to the database
exports.createProduct = async(req, res)=>{
    try{
        //we first send the data in the body to the database
        const newProduct =  await db.Product.create(req.body);
        //if the product is created we receive back a json object
         res.status(201).json(newProduct);
    }
    //if not we get back the error 
    catch(err){
        res.status(409).json({message: error.message});
    }
}

//this function retrieves the product specified using an id
exports.retrieveProduct = async(req, res)=>{
    try{
        //we search the database using the product id that we have access to in the params
        const foundProducts = await db.Product.find({}).where("category").equals(req.params.productId);
        //returns the product if found
        return res.json(foundProducts);
    }
    //else returns the error
    catch(err){
        res.status(404).json({message: err.message});
    }
}


//this function updates the data on ths specified productId,
exports.updateProduct = async(req, res)=>{
    try{
        //we search the database using the provided id and then if found modify the data and save a new product;
        const updatedProduct = await db.Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true})
        //if the product has been updated, we return it
            return res.json(updatedProduct);
        //else we return the error
    }
    catch(err){
        res.send(err);
    }
}


//this function removes the product from the database
exports.removeProduct = async(req, res)=>{
    try{
        //we first search the database using the provided id and remove the product corresponding to the id
        await db.Product.findByIdAndRemove({_id: req.params.productId})
        //if succesfully deleted we redirect or just alert a message to let us know that the product has been succesfully deleted
        res.json({message: 'the product has been deleted'});
        //else we return the error
    }
    catch(err){
        res.send(err);
    }
}
