let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    FirstName: { type: String, min: 3, max: 200, required: true, alphanum: true, trim: true },
    LastName: { type: String, min: 3, max: 200, required: true, alphanum: true, trim: true },
    MobileNo: { type: String, required: true },
    UserLogin: {
        EmailId: { type: String, required: true, unique: true },
        Password: { type: String, required: true }
    }
});

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;