const mongoose=require('mongoose')
const Schema=mongoose.Schema

const costwShema = new Schema({

    _id:String,
    costw :String
    
    


})

module.exports=mongoose.model('costw',costwShema)
