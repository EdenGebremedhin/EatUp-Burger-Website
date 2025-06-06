import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import 'dotenv/config'

//app config
const app = express()
const port = 4000

// middleware
app.use(express.json()) //req from frontend to backend, it will be passed using this json(For parsing JSON)
app.use(cors()) //to access the backend from frontend

//db connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter)  //mounting routes
app.use("/images", express.static('uploads'))

app.use("/api/user", userRouter)

app.use("api/cart", cartRouter)

app.get("/", (req, res)=>{   //http method to request the data from the server like(delete, update)
    res.send("API working")
})

// running the express server

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://EatUp:Dolly22@cluster0.f81vxbv.mongodb.net/?