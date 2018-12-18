const express=require('express')
const upload=require('../middleware/upload')
const controller=require('../controllers/gallery')
const router=express.Router()

router.get('/',controller.getAll)
router.post('/',upload.single('image'),controller.create)
router.delete('/:id',upload.single('image'),controller.remove)


module.exports=router