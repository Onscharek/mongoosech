// require express
const express =require("express");

// exp to app
const app =express();
// dotenv
require("dotenv").config();      

// connect db
const connectDB= require("./config/connectDB");
connectDB();
// port creation
const port = process.env.port;
// app listener
app.listen (port, error =>{
  error
  ? console.error(`connection failed ..${err}`) 
  :console.log (`connected succ on port ${port}`)
}
) 

