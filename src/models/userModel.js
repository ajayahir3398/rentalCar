const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true, unique: true },
    userName: { type: String, unique: true },
    name: { type: String, required: false },
    mobileNo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    address: {
      street: { type: String, required: false },
      street2: { type: String },
      city: { type: String, required: false },
      state: { type: String, required: false },
      pinCode: { type: String, required: false },
      country: { type: String, required: false },
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
