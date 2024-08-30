const adminModel = require("../models/adminModel");
const hashPassword = require("../util/hashpassword");
const comparePasswords = require("../util/comparepassword");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const {
      Admin_name,
      Admin_email,
      Admin_password,
      Confirm_password,
      Admin_mobile,
    } = req.body;
    const profile = req?.file?.filename;
    const hashPass = await hashPassword(Admin_password,Confirm_password);
    // const hashPass = await hashPassword(Admin_password);
    const admin = await adminModel.create({
      Admin_name,
      Admin_email,
      Admin_password: hashPass,
      Confirm_password:hashPass,
      profile,
      Admin_mobile,
    });
    if (admin) {
      // res.json("thanks you for registration");
      res.redirect("/login");
    } else {
      res.json("Something Wrong");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { Admin_email, Admin_password } = req.body;
    const admin = await adminModel.findOne({ Admin_email: Admin_email });
    if (!admin) {
      res.json("user not found");
    }
    const Ismatch = await comparePasswords(
      Admin_password,
      admin.Admin_password
    );
    if (!Ismatch) {
      res.status(400).json({
        success: false,
        message: "Invalid Crediantial...🤦‍♂️🤦‍♂️🤦‍♀️🤦‍♀️😫",
      });
    } else {
      const token = jwt.sign(
        {
          adminid: admin._id,
          adminrole: admin.Admin_role_id,
        },
        "devanshi16",
        { expiresIn: "24h" }
      );

      res.cookie("token", token, { httpOnly: true });
      res.cookie("admin", admin, { httpOnly: true }).redirect("/");
    }
  } catch (err) {
    console.log(err);
  }
};
