import foodModel from "../models/foodModel.js";
import fs from 'fs' //file system from pre-built in node.js

//add food item

const addFood =async(req, res) => {
    //  Check if file was uploaded
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Image file is missing. Make sure to send 'image' in form-data." });
    }

    let image_filename = `${req.file.filename}`

    //adding new food using the food model
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true, message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
    

}

export {addFood}