const mongoose=require('mongoose')
const Schema=mongoose.Schema

const costwShema = new Schema({
    
    cost:String
    
    


})

module.exports=mongoose.model('costw',costwShema)