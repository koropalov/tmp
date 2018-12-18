const express=require('express')
const controller=require('../controllers/cost')
const router=express.Router()

router.get('/',controller.getAll)
router.post('/',controller.create)
router.patch('/:id',controller.cheng)


module.exports=router