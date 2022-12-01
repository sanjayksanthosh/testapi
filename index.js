require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error',(error)=>{console.error(error)})

db.once('open',()=>console.log('connected to databse'))

app.use(express.json())


const usersRouter =  require('./routes/users.js')

app.use('/users',usersRouter)

app.use('/',(req,res)=>{
    res.json({message:"connected sucessfully"})
})

app.listen(3000,()=>{
    console.log('server has started')
    
})