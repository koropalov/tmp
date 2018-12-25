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
module.exports.remove= async function(req,res){
    try{
  await Costny.remove()
        res.status(200).json({
            message:'Цена НГ удалена'
        })
    }catch(e){
    errorHandler(res,e)
    }
}
module.exports.create = async function(req,res){
    try{
   const costny=await new Costny({
       costny:req.body.costny,
       _id:req.body._id
   }).save()
   res.status(201).json(costny)
    }catch(e){
    errorHandler(res,e)
    }
}
