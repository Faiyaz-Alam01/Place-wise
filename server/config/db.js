import mongoose from "mongoose"

const connectDB = async () => {

	const url = process.env.MONGO_URI;

	try {
		const connectionInstance = await mongoose.connect(url);
		console.log(`\n MongoDB connected ! DB Host: ${connectionInstance.connection.host}`)

	} catch (error) {
		console.log("yar MongoDB connection Failed ", error);
		process.exit(1)

	}	
}

export default connectDB