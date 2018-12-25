const Cost=require('../models/Cost')
const errorHandler=require('../utils/errorHandler')

module.exports.getAll=async function(req,res){
    try{
      const cost=await  Cost.find()
          res.status(200).json(cost)
    }catch(e){
    errorHandler(res,e)
    }
}
module.exports.cheng=function(req,res){
    try{
  
  
    }catch(e){
    errorHandler(res,e)
    }
}
module.exports.create = async function(req,res){
    try{
   const cost=await new Cost({
       cost:req.body.cost ,
       _id:req.body._id  
   }).save()
   res.status(201).json(cost)
    }catch(e){
    errorHandler(res,e)
    }
}