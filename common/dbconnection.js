const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL).then(res=>{
    console.log("database connected")
})

.catch(err=>{
    console.log("database connection failed",err)
})
