const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const passport=require('passport')
const path=require('path')
const authRoutes=require('./routes/auth')
const costRoutes=require('./routes/cost')
const costnyRoutes=require('./routes/costny')
const costwRoutes=require('./routes/costw')
const galleryRoutes=require('./routes/gallery')
const dateRoutes=require('./routes/date')
const keys=require('./config/keys')
const app=express()

const indexRouter=require('./routes/index')

mongoose.connect(keys.mongoURI)
.then(()=>console.log('MongooDB connected'))
.catch(error=>console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)


app.use(require('morgan')('dev'))
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth',authRoutes)
app.use('/api/cost',costRoutes)
app.use('/api/costny',costnyRoutes)
app.use('/api/costw',costwRoutes)
app.use('/api/gallery',galleryRoutes)
app.use('/api/date',dateRoutes)

app.use('/',indexRouter)

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/dist/om'))
    app.get('*',(req,res)=>{
        res.sendFile(
            path.resolve(
                __dirname, 'client','dist','om','index.html'
            )
        )
    })
}

module.exports=app