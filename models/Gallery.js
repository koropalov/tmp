const mongoose=require('mongoose')
const Schema=mongoose.Schema

const gallerySchema=new Schema({
    imageSrc:{
        type:String,
        _id:String
    }
})

module.exports=mongoose.model('gallerys',gallerySchema)