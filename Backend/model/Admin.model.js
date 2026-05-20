// * require Mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//  * Schema
const adminSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, 'userName is Required '],
    },
    email: {
      type: String,
      required: [true, 'email is Required '],
    },
    password: {
      type: String,
      required: [true, 'password is Required '],
      minlength: [6, 'password must be 6 char'],
      select: false,
    },
  },
  { timestamps: true },
);

//* Hooks
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

adminSchema.methods.comparePassword = async function (matched) {
  return await bcrypt.compare(matched, this.passowrd);
};

//* model
const Admin = mongoose.model('Admin', adminSchema);

//* Export
module.exports = Admin;
