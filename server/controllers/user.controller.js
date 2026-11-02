const registerUser = async (req, res) => {
	try {
		const {name, email, password} = req.body;
		console.log("Request Body:", req.body); // Log the request body for debugging

		if(!name || !email || !password){
			return res.status(400).json({message: "Please fill all the fields"})
		}	
		
		return res.status(201).json({message: "User registered successfully"});
	} catch (error) {
		console.error(error);
		return res.status(500).json({message: "Internal Server Error"});
	}
}

export {registerUser}