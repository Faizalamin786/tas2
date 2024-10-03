const Order  = require("../models/Order");

//get all orders

exports.getOrders = async(req,res)=>{
    try{
        const orders = await Order.find().populate("products.productId");
        res.json(orders);
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

//create order

exports.createOrder = async(req,res)=>{
    const {products,totalAmount} = req.body;

    try{
        const order = new Order({products,totalAmount});
        await order.save();
        res.status(201).json(order);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

