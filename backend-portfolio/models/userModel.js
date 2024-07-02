const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
