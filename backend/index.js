const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const {pool}=require("./db.js")

dotenv.config()

const app=express()

app.use(cors({origin: "http://localhost:5173", credentials: true}))
app.use(express.json())



const PORT=process.env.PORT || 8000
app.listen(PORT,async()=>{
    console.log(`Server is running on PORT ${PORT}`);
})


const authRoutes=require("./route/auth.route.js")
const userRoutes=require("./route/user.route.js")
const weatherRoutes=require("./route/weather.route.js")

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/weather",weatherRoutes)