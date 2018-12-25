const mongoose=require('mongoose')
const Schema=mongoose.Schema

const costShema = new Schema({
      cost:{ _id:String,
        type:String}
        
    

})

module.exports=mongoose.model('costs',costShema)