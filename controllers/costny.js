const Costny=require('../models/CostNY')
const errorHandler=require('../utils/errorHandler')

module.exports.getAll=async function(req,res){
    try{
      const costny=await  Costny.find()
          res.status(200).json(costny)
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
   const costny=await new Costny({
       costny:req.body.costny
   }).save()
   res.status(201).json(costny)
    }catch(e){
    errorHandler(res,e)
    }
}