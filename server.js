const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mysql=require("mysql")
const createProductTable = require('./src/db/productDetails.db')

dotenv.config()

const port=process.env.PORT


const dbConfig={
    port:3306,
    host:"localhost",
    user:process.env.DB_USER,
    password:"MySql@1106pp",
    database:process.env.DB_NAME,
}


const pool=mysql.createPool(dbConfig)
pool.getConnection((result,error)=>{
    if(error)
    {
        console.log("Getting error in connecting database");
        return 
    }
    console.log("Database connected!")
})

const connection=mysql.createConnection(dbConfig)

connection.query(createProductTable,(error,results)=>{
    if(error){
        console.log(error);
        return
    }
    console.log(results)
})


 
app.listen(port,()=>[
    console.log(`Server started at port ${port}`)
])



app.get('/',(req,res)=>{
    res.status(200).json({success:1, data:null, message:"server started and you are at entry point of server"})
})

