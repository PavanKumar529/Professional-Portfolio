const express = require("express");
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect")

let PORT = process.env.PORT || 8000
let hostName = process.env.HOST_NAME || '127.0.0.8'


// middlware configration
dotenv.config(); // Load environment variables from .env file

// db connection
dbConnect()

const app = express();


app.get("/", (req, res) => {
    res.send("<h1>Hello, i am server</h1>")
})

// Start the server
app.listen(PORT, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${PORT}`);
})