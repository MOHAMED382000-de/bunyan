const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [6, "password must be 6 char"],
        select: false,
    }
}, { timestamps: true });

adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    next();
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
