import express from "express"
import { addFood } from "../controllers/foodController"
import multer from "multer"

const foodRouter = express.Router(); // used to create get, post,.. methods

//Image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage}) //upload is the middleware

foodRouter.post("/add", upload.single("image"), addFood)  // to send data to the server



export default foodRouter;