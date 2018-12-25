const mongoose=require('mongoose')
const Schema=mongoose.Schema

const costnyShema = new Schema({

    _id:String,
    costny :String
    
    
    


})

module.exports=mongoose.model('costny',costnyShema)
