const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.urlencoded({extended:true}))
app.use(cors())
require('dotenv').config()
app.use(express.json())

const db = require('./common/dbconnection')


const Emprouter = require('./routes/emprouter')

app.use('/emp',Emprouter)

app.listen(process.env.PORT,()=>{
    console.log("server running "+ process.env.PORT)
})