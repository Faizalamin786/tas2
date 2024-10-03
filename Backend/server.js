const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');



app.use(cors());
app.use(express.json());

app.listen(5000,()=>console.log('listening on port 5000'))

app.use('/api/products',require("./routes/productRoutes"))
app.use('/api/orders',require("./routes/OrderRoutes"))


mongoose.connect("mongodb+srv://Faizal:Faizal786@faizal.atlxp5u.mongodb.net/Task2")
.then(()=>console.log('MongooDb Connect'))
.catch((err)=>console.log(err))

