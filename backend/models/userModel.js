//define the model of a user

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object, default:{}} //where user cart is managed.
}, {minimize:false}) //to create cartData entry with out any data

const userModel = mongoose.models.user || mongoose.model("user", userSchema) //user is the model name
export default userModel;