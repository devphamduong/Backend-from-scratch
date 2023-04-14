const mongoose = require("mongoose");

//data shape
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});
const User = mongoose.model("user", userSchema);

module.exports = User;