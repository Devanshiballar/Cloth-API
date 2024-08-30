const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    Admin_name: {
      type: String,
      required: true,
      trim: true,
    },
    Admin_email: {
      type: String,
      required: true,
      trim: true,
    },
    profile: {
      type: String,
      required: true,
    },
    Admin_password: {
      type: String,
      required: true,
      trim: true,
    },
    Confirm_password: {
      type: String,
      required: true,
      trim: true,
    },
    Admin_mobile: {
      type: Number,
      required: true,
      trim: true,
    },
    Admin_role_id: {
      type: Number,
      default: 1,
      enum: [0, 1, 2],
    },
  },
  { timestamps: true }
);

const Admin = model("Admin", adminSchema);
module.exports = Admin;
