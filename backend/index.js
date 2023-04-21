
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const MONGO_CONNECTION_STRING= "mongodb+srv://nani:epam123@cluster0.rrusc.mongodb.net/?retryWrites=true&w=majority"

const PORT=process.env.PORT || 3001
const Auth=require('./routes/auth')
const Owner=require('./routes/owner')
const Pet=require('./routes/pet')

app.use(cors())
app.use(express.json())
app.use('/auth',Auth)
app.use('/owner',Owner)
app.use('/pet',Pet)
// app.use('/posts',Posts)
// app.use('/history',history)


mongoose.connect(MONGO_CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,err=>{
            if(err){
                console.log("Server crashed, Error is "+err)
            }
            else{
                console.log("Server running under port"+PORT)
            }
        })
    })
    .catch((error)=>{console.log(error)});