const mongoose=require('mongoose')
const Schema=mongoose.Schema

const costShema = new Schema({
    
    cost:{
        type:String,
        _id:String
    }

})

module.exports=mongoose.model('costs',costShema)