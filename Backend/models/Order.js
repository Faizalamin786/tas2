const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    product:[
        {
        productId:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
        quantity:{type:Number, required:true},

        }
    ],
    totalAmount:{type:Number, required:true},
    status:{type:String, enum:["Pending", "Proceed","Skipped","Delivered"], default:"Pending"}

})

module.exports = mongoose.model('Order', orderSchema);