const mongoose = require("mongoose") ;

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    favorites: [{ type: String }]

}, { timestamps: true })

const User = mongoose.model('user',userSchema);

module.exports = User;
