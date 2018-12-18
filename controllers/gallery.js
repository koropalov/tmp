const Gallery=require('../models/Gallery')
const errorHandler=require('../utils/errorHandler')
module.exports.getAll = async function(req,res){
try{
  const gallery= await Gallery.find({})
  res.status(200).json(gallery)
}catch(e){
errorHandler(res,e)
}
}
module.exports.create= async function(req,res){
    
    const gallery = new Gallery({
        imageSrc:req.file.path
    })
   
    try{
  await gallery.save()
  res.status(201).json(gallery)
    }catch(e){
    errorHandler(res,e)
    }
}
module.exports.remove= async function(req,res){
    try{
  await Gallery.remove({id:req.params._id})
  res.status(200).json({
      message:'Фотография удаленна'
  })
    }catch(e){
    errorHandler(res,e)
    }
}
