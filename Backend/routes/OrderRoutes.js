const express = require('express');

const router = express.Router(); 
const {getOrder,createOrder,updateOrderStatus} = require('../controllers/OrderController');


router.get("/",getOrder);

router.post("/",createOrder);

router.put("/:id",updateOrderStatus);

module.exports = router;