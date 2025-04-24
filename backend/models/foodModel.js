import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
    image:{type:String, required: true},
    category: {type:String, required: true}
})

// use the model if it already exists otherwise create a new one
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema) //food is the model name

export default foodModel;