const BookDate=require('../models/Dates')
const errorHandler=require('../utils/errorHandler')
const ObjectID = require('mongodb').ObjectID;


module.exports.getAll = async function(req,res){
try{
  const bookDate= await BookDate.find()
  res.status(200).json(bookDate)
}catch(e){
errorHandler(res,e)
}
}

module.exports.create=async function(req,res){
    try{
      
  const bookDate=await new BookDate({
      
          day:req.body.day,
          month:req.body.month,
          year:req.body.year,
          _id:req.body._id
          
  }).save()
  res.status(201).json(bookDate)
    }catch(e){
    errorHandler(res,e)
    }
}

module.exports.remove = async function(req,res){
    try{
     
  await BookDate.remove({_id:req.params.id})
  res.status(200).json({
    message:'Запись удалена'
  })
    }catch(e){
    errorHandler(res,e)
    }
}
