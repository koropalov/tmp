const mongoose=require('mongoose')
const Schema=mongoose.Schema

const costnyShema = new Schema({
    
    cost:String
    
    
    


})

module.exports=mongoose.model('costny',costnyShema)