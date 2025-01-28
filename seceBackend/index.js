const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const bcrypt = require("bcrypt");
const cors=require('cors');

dotenv.config();
const app = express();

app.use(cors())

app.use(express.json());

mdb
  .connect("mongodb+srv://secemern2025:sece2025@mern2025.elvk4.mongodb.net/")
  .then(() => {
    console.log("MongoDB Connection Sucessfull");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsucessfull", err);
  });

app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend my friend\n Your RollerCoster starts from now on\n Fasten your codabase so you can catchup of what is been taught"
  );
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
//signup
app.post("/signup", async (req, res) => {
  var { firstName, lastName, username, email, password } = req.body;
  var hashedpassword = await bcrypt.hash(password, 10);
  console.log(hashedpassword);
  try {
    console.log("Inside try");
    const newCustomer = new Signup({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashedpassword,
    });
    newCustomer.save();
    res.status(201).send("signup successfull");
  } catch (err) {
    res.status(400).send("Signup Unsuccessfull", err);
  }
});
// login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Signup.findOne({ email: email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    if (user.password === password) {
      res.status(200).send("Login Successful");
    } else {
      res.status(401).send("Incorrect Password");
    }
  } catch (err) {
    res.status(500).send("Error during login");
  }
});

// get Signup details route
app.get("/getsignupdet", async (req, res) => {
  var signUpdet = await Signup.find();
  res.status(200).json(signUpdet);
});
//update user details
app.post("/updatedet", async (req, res) => {
  var updateRec = await Signup.findOneAndUpdate(
    { username: "angunisha" },
    { $set: { username: "angu3110" } }
  );
  console.log(updateRec);
  updateRec.save();
  res.json("Record Updated");
});

// Delete user
app.delete("/deleteuser", async (req, res) => {
  const { id } = req.body;
  try {
    const deleteUser = await Signup.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successdull");
  } catch (err) {
    res.status(500).send("Error deleting user");
  }
});

app.listen(3001, () => {
  console.log("Server Started");
});
