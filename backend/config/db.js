import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://EatUp:Dolly22@cluster0.f81vxbv.mongodb.net/EatUpBurger').then(()=>console.log("DB connected"));
}