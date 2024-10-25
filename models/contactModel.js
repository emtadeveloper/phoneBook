const mongoose = require("mongoose");

const contactShema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, require: [true, "Please add contact name"] },
    email: { type: String, require: [true, "Please add contact email address"] },
    phone: { type: String, require: [true, "Please add contact phone"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactShema);
