const express = require('express')
const router = express.Router()
const User = require('../models/user')
 // getting all
 router.get('/', async (req,res)=>{
   try{
    const users = await User.find()
    res.send(users)

   }catch(err){
    res.status(500).json({message:err.message})
   }
 })
 //getting one
 router.get('/:id',getUser,(req,res)=>{
    res.json(res.user)
 })

 //creating one
 router.post('/',async (req,res)=>{
    const user = new User({
        name:req.body.name,
        age:req.body.age

    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})
 //updating one
 router.patch('/:id',getUser,(req,res)=>{
})
 //deleting one
 router.delete('/:id', getUser,async(req,res)=>{
    await res.user.remove()
    res.json({message: 'Deleted user'})
    try {

    }catch(err){
        res.status(500).json({message: err.message})
    }
})

async function getUser(req,res,next){
    let user
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: 'cannot find a user'})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }
    res.user =  user
    next()
}



module.exports = router
