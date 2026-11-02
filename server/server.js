// import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";

const app = express();

dotenv.config({
	path: './.env'
})

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
import userRoutes from "./routes/user.route.js"
app.use("/api/v1/users", userRoutes);

connectDB()

.then(() => {
	app.listen(process.env.PORT || 8000, ()=>{
		console.log(`server is running at port : ${process.env.PORT}`)
	})
}).catch((err) => {
	console.log("Mongo Db Connection failed !!!", err);
})

