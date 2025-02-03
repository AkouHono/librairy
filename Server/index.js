import express from "express";
import cors from 'cors'
import { adminRouter } from "./Routes/AdminRoute.js";



const app = express()
app.use (cors({
    origin: ["http://localhost:5173/"],
    methods: ['GET', 'POST', 'PUT'],
    optionsSuccessStatus: 200  // some legacy browsers (IE11, various SmartTVs) choke on 204
 
}))
app.use(express.json())
app.use('/auth', adminRouter)



app.listen(3000, () => {
    console.log("server is running")
})