const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const userModel = require("./models/userModel"); 
const cors = require("cors");


// Middleware configuration
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 1000;
const hostName = process.env.HOST_NAME || '0.0.0.0';


const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Configure CORS middleware
app.use(cors())

// Database connection
dbConnect(); // Ensure dbConnect() function is correctly establishing the database connection

// Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello, I am server</h1>");
});

app.post("/register", async (req, res) => {
    try {
        // console.log("Incoming request:", req.body);
        const { name, email, mobileNumber, description } = req.body; // Destructure fields from req.body

        // Check if all required fields are present
        if (!name || !email || !mobileNumber || !description) {
            return res.status(400).send("Missing required fields");
        }

        // Check if the email already exists in the database
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json( {message: "User Already Registered", success: false});
        }

        // Create new user object
        let newUserData = new userModel({
            name,
            email,
            mobileNumber: parseInt(mobileNumber), // Ensure mobileNumber is parsed as a number
            description
        });

        // Save user to the database
        await newUserData.save();
        res.status(201).json({ message:"Registered Successfully", success: true} );
    } catch (err) {
        console.error("Error while storing data in DB:", err);
        res.status(500).json({ message: "Error while Storing data in DB", success: false });
    }
});

// Start the server
app.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
});
