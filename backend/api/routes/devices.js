import express from "express";
import Device from "../models/Device.js";
const router = express.Router();

//Add new device
router.post("/", async (req,res)=>{
    
    const newDevice = new Device(req.body)
    
    try{
        const savedDevice = await newDevice.save()
        res.status(200).json(savedDevice)
    }catch(err){
        res.status(500).json(err)
    }
});

//Update existing device
// router.put("/:id", async (req,res)=>{
//     try{
//         const updatedEmployee = await Employee.findByIdAndUpdate(
//             req.params.id, 
//             {$set: req.body},
//             {new: true}
//         );
//         res.status(200).json(updatedEmployee)
//     }catch(err){
//         res.status(500).json(err)
//     }
// });

//Delete existing device
router.delete("/:id", async (req,res)=>{
    try{
        await Device.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Device has been deleted.");
    }catch(err){
        res.status(500).json(err)
    }
});

//Retrieve single device record
router.get("/:id", async (req,res)=>{
    try{
        const device = await Device.findById(
            req.params.id
        );
        res.status(200).json(device)
    }catch(err){
        res.status(500).json(err)
    }
});

//Retrieve all device records
router.get("/", async (req,res)=>{
    try{
        const devices = await Device.find(
            req.params.id
        );
        res.status(200).json(devices)
    }catch(err){
        res.status(500).json(err)
    }
});


export default router