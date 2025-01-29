const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

mdb
  .connect("mongodb+srv://secemern2025:sece2025@mern2025.elvk4.mongodb.net/")
  .then(() => {
    console.log("MongoDB Connection Sucessfull");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsucessfull", err);
  });

const verifyToken = (req, res, next) => {
  var token= req.headers.authorization
  console.log("midddleware");
  if (!token){
     res.send("Request Denied");
  }
  try{
       const user =jwt.verify(token,process.env.SECRET_KEY)
       console.log(user);
       req.user=user
  }catch(error){
    console.log(error);
    res.send("Error in token")
  }
  next();
};
app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend my friend\n Your RollerCoster starts from now on\n Fasten your codabase so you can catchup of what is been taught"
  );
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/json',verifyToken,(req,res)=>{
  console.log("json route");
    res.json({message:"This is a middleware check",user:req.user.username})
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
    const user = await Signup.findOne({ email });
    console.log(user);
    if (user) {
      const payload = {
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      console.log(token);
      var isPasswordCorrect = await bcrypt.compare(password, user.password);
      // console.log(password,user.password);
      if (isPasswordCorrect) {
        await user.save();
        res.status(200).send("Login Successful", (token = token));
      } else {
        res.status(200).send("Login Unsuccessful");
      }
    } else {
      res.status(401).send("User not found please signup!");
    }
  } catch (err) {
    res.status(500).send({ message: "Error during login" });
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
