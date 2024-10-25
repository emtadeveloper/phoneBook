const mongoose = require("mongoose");

const userSchma = mongoose.Schema(
  {
    username: { type: String, required: [true, "Plase add the user name"] },
    email: { type: String, required: [true, "Plase add the user name"], unique: [true, "Email address already taken"] },
    password: { type: String, required: [true, "Plase add the password "] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchma);
