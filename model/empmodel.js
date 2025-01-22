const mongoose= require('mongoose')

const empschema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    postion: {type:String, required:true},
    salary: {type:Number, required:true},
})

const empmodel = mongoose.model('emp_table',empschema);

module.exports=empmodel;