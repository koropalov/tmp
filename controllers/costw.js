const Costw=require('../models/CostW')
const errorHandler=require('../utils/errorHandler')

module.exports.getAll=async function(req,res){
    try{
      const costw=await  Costw.find()
          res.status(200).json(costw)
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
   const costw=await new Costw({
       costw:req.body.costw
   }).save()
   res.status(201).json(costw)
    }catch(e){
    errorHandler(res,e)
    }
}