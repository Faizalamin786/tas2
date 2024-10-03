const Product = require('../models/Product');


//get all products
exports.getProducts = async(req,res)=>{

    try{
        const products = await Product.find();
        res.json(products);
    }catch(err){
        res.status(500).json({message: err.message});
    }

};

//create all products

exports.createProducts = async(req,res)=>{

    const {name,description,price,catagory,stock} = req.body;

    try{
        const product = new Product({name,description,price,catagory,stock})
        await product.save();
        res.status(200).json(product)
    }catch(err){
       res.status(500).json({message: err.message}); 
    }

}
//update the product
exports.updateProduct = async(req, res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{new: true})
        res.json(product)
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

//delete the product

exports.deleteProduct = async(req, res)=>{

    try{
        await Product.findByIdAndDelete(req.params.id);
        res.json({message:"Product deleted"})
    }catch(err){
        res.status(500).json({message:error.message});
    }
}