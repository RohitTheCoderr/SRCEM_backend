const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./configs/database");
const errorHandler = require("./middlewares/authMiddleware");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

dotenv.config();

const app = express();

// Allow all origins
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require('dotenv').config();
// const express = require('express');
// const connectDB=require("./configs/database")
// const userRoutes =require("./routes/userRoutes")

// const app = express();

// app.use(express.json());
// app.use('/api/users', userRoutes);

// connectDB();

// module.exports = app;

// // const express =require('express')

// //  require("./configs")

// // const app=express()
// // const schemaModel=require('./DB/schema')

// // const productModel=require('./DB/product')

// // const cors =require('cors');
// // const port=8628;

// // app.use(express.json())
// // app.use(cors())

// // app.post('/register',async(req,res)=>
// // {
// //   let data=new schemaModel(req.body);
// //   let result=await data.save();
// //   result=result.toObject();
// //   delete result.password;
// // //   console.log(result)
// //   res.send(result)
// // })
// // app.post('/login',async(req,res)=>
// // {
// //     // console.log(req.body);
// //     if(req.body.email && req.body.password)
// //         {
// //             // let data=await schemaModel.findOne(req.body).select("password");
// //             let data=await schemaModel.find(req.body)
// //             if(data){
// //              res.send(data);
// //             }
// //             else{
// //                 res.send({result:"no user found"})
// //             }
// //         }
// //             else{
// //             res.send({result:"no user found"});
// //         }
// // });

// // //  product schema start ====================

// // app.post('/add-product',async(req,res)=>
// // {
// //     let product=new productModel(req.body);
// //     let data=await product.save();
// //     res.send(data);
// // })

// // app.get('/product',async(req,res)=>
// // {
// //     let data=await productModel.find();
// //     if(data.length>0)
// //         {
// //             res.send(data);
// //         }
// //         else{
// //             res.send("no record found")
// //         }
// // })

// // app.delete('/product/:id',async(req,res)=>
// // {
// //     // let data=await productModel.find({_id:req.params.id});
// //     let data=await productModel.deleteOne({_id:req.params.id});
// //     if(data){
// //         res.send(data);
// //         console.log(data);
// //     }
// //     else{
// //         res.send("no record found");
// //         console.log('no record found');
// //     }
// // })
// // app.put('/product/:id',async(req,res)=>
// // {
// //     let data=await productModel.updateOne(
// //         { _id:req.params.id},
// //         {$set:req.body}
// //     )
// //     if(data.modifiedCount==1)
// //         {
// //        res.send(data);
// //        console.log(data);
// //         }
// //         else{
// //             res.send("no record updated");
// //             console.log("no record updated")
// //         }
// // })

// // //  details schema start   =============================

// // app.post('/add-details',async(req,res)=>
// //     {
// //         let details=new schemaModel(req.body);
// //         let data=await details.save();
// //         res.send(data);
// //     })

// // app.get('/details',async(req,res)=>
// // {
// //     let data=await schemaModel.find();
// //     if(data.length>0)
// //         {
// //             res.send(data);
// //         }
// //         else{
// //             res.send("no record found")
// //         }
// // })

// // app.get("/search/:key",async(req,resp)=>
// // {
// //     const result=await productModel.find({
// //         "$or":[
// //             {name:{$regex:req.params.key}},
// //             {price:{$regex:req.params.key}},
// //             {company:{$regex:req.params.key}},
// //             {category:{$regex:req.params.key}}
// //         ]

// //     })
// //     console.log(result);
// //     resp.send(result)
// // })

// // app.listen(port,()=>{
// //     console.log(`server is ready at port number ${port}`)
// // })
