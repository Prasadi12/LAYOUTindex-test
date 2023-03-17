import express from "express";
import Location from "../models/Location.js";
const router = express.Router();

//Add new location
router.post("/", async (req,res)=>{
    
    const newLocation = new Location(req.body)
    
    try{
        const savedLocation = await newLocation.save()
        res.status(200).json(savedLocation)
    }catch(err){
        res.status(500).json(err)
    }
});

//Update existing location
router.put("/:id", async (req,res)=>{
    try{
        const updatedLocation = await Location.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedLocation)
    }catch(err){
        res.status(500).json(err)
    }
});

//Delete existing location
router.delete("/:id", async (req,res)=>{
    try{
        await Location.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Location has been deleted.");
    }catch(err){
        res.status(500).json(err)
    }
});

//Retrieve single location record
router.get("/:id", async (req,res)=>{
    try{
        const location = await Location.findById(
            req.params.id
        );
        res.status(200).json(location)
    }catch(err){
        res.status(500).json(err)
    }
});

//Retrieve all location records
router.get("/", async (req,res)=>{
    try{
        const locations = await Location.find(
            req.params.id
        );
        res.status(200).json(locations)
    }catch(err){
        res.status(500).json(err)
    }
});


export default router