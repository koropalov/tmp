const mongoose=require('mongoose')
const Schema=mongoose.Schema

const bookDateSchema=new Schema({
    
        day:Number,
        month:Number,
        year:Number,
        _id:String
      
})
module.exports=mongoose.model('dates',bookDateSchema)