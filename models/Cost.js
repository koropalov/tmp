const mongoose=require('mongoose')
const Schema=mongoose.Schema

const costShema = new Schema({
    
    cost:String


})

module.exports=mongoose.model('costs',costShema)