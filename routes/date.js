const express=require('express')
const controller=require('../controllers/date')
const passport=require('passport')
const jwt=require('passport-jwt')
//const upload=require('../middleware/upload')
const router=express.Router()

router.get('/',controller.getAll)
router.post('/',controller.create)
router.delete('/:id',controller.remove)


module.exports=router