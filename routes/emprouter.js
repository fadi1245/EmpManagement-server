const express = require('express');
const router = express.Router();
const empmodel = require('../model/empmodel')
const mongoose = require('mongoose')

router.post('/addemp', async(req,res)=>{
    try{
        const data = await empmodel.create(req.body)
        res.status(201).json({messege: "emp adde sucessfully",data})
    }
    catch(err){
        console.error(err);
            res.status(500).json({messege:"failed"})
        
    }
})
router.get('/getdata', async (req, res) => {
    try {
      const data = await empmodel.find();
      res.status(200).json({ message: "Data fetched", data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to fetch details", error: err.message });
    }
  });

router.delete('/deleteemp/:id',async(req,res)=>{
    try{
        const dataId =req.params.id;
        const result = await empmodel.deleteOne({_id:dataId})

        if(result.deletedCount>0){
            res.json({messege: "employee data deletd"})
        }
        else{
            res.status(404).json({messege:"employee details not found"})
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({messege:"failed to delete employee",err})
    }
})

router.get('/getemp/:id', async (req, res) => {
    try {
      const dataId = req.params.id;
  
      if (!mongoose.Types.ObjectId.isValid(dataId)) {
        return res.status(400).json({ message: "Invalid employee ID" });
      }
  
      const employee = await empmodel.findById(new mongoose.Types.ObjectId(dataId));
  
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json({
        message: "Employee data fetched successfully",
        data: employee,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch employee", error: err.message });
    }
  });

  router.put('/updateemp/:id', async (req, res) => {
    try {
      const dataId = req.params.id;
  
      if (!mongoose.Types.ObjectId.isValid(dataId)) {
        return res.status(400).json({ message: "Invalid employee ID" });
      }
  
      const updatedEmployee = await empmodel.findByIdAndUpdate(
        dataId, 
        req.body, 
        { new: true } 
      );
  
      if (!updatedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json({
        message: "Employee data updated successfully",
        data: updatedEmployee,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update employee", error: err.message });
    }
  });
  
  
  


module.exports=router