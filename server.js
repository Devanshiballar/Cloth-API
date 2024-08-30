const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
const PORT = 5000;
const path = require("path");

require("./config/db");
const adminRoute = require("./routes/adminRoutes");
const clothRoute = require("./routes/clothRoutes");
const Cloth = require("./models/clothModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.static("public"));
app.use(cookieParser());

app.use('/profile',express.static(path.join(__dirname, 'uploads/cloth')))

// app.get("/",(req, res)=>{
//   res.render("index")
// })
app.get("/view_cloth", async (req, res) => {
  const data = await Cloth.find();
  res.render("view_cloth", {
    data: data,
  });
});

app.get("/", (req, res) => {
  if (!req.cookies.admin) {
    res.redirect("/login");
  }
  const admin = req.cookies.admin;
  res.render("index", {
    admin: admin,
  });
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/cloth_Add", (req, res) => {
  res.render("cloth_Add");
});

app.get("/logout", (req, res) => {
  res.clearCookie("user", { httpOnly: true });
  res.redirect("/login");
});
app.use("/api/admin", adminRoute);
app.use("/api/cloth", clothRoute);

app.listen(PORT, () => {
  console.log(`port number: ${PORT}`);
});
