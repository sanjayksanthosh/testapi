const { default: mongoose } = require('mongoose')
const mongoos = require('mongoose')

const userSchema = new mongoos.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            required:true,
            default:Date.now
        },
        age:{
            type:String,
            required:true,
        },
    }
)

module.exports = mongoose.model('user',userSchema)