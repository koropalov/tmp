const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const keys=require('../config/keys')
const Admin=require('../models/Admin')
const errorHandler=require('../utils/errorHandler')

module.exports.login= async function(req,res){
  const candidate = await Admin.findOne({email:req.body.email})
  if(candidate){
      //Проверка пароля , пользователь существует
      const passwordResult=bcrypt.compareSync(req.body.password,candidate.password)
      if(passwordResult){
          //Генерируем токен, пароли совпали
          const token=jwt.sign({
              email:candidate.email,
              adminId:candidate._id
          },keys.jwt,{expiresIn:60*60})
          res.status(200).json({
              token:`Bearer ${token}`
          })
      }else{
          //Пароли не совпали
          res.status(401).json({
          message:'Пароли не совпадают.'
      })
      }
  } else{
      //Пользователя нет ошибка
      res.status(404).json({
          message:'Пользователь с таким email не найден'
      })
  }
    
}
module.exports.register = async function(req,res){
const candidate = await Admin.findOne({email:req.body.email})
//Пользователь существует , нужно отправить ошибку
if(candidate){
res.status(409).json({
    message:'Такой email уже занят.'
})
}else{
    //Нужно создать пользователя
    const solt=bcrypt.genSaltSync(10)
    const password=req.body.password
    const admin = new Admin({
        email:req.body.email,
        password:bcrypt.hashSync(password,solt)
    })
    try{
         await admin.save()
         res.status(201).json(admin)
    } catch(e){
        //Обработать ошибку
        errorHandler(res,e)
    }
   
}
}