const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
dotenv.config();
const app = express();
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
app.post("/signup", (req, res) => {
  var { firstName, lastName, username, email, password } = req.body;
  try {
console.log("Inside try");
      const newCustomer = new Signup({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    });
    newCustomer.save()
    res.status(201).send("signup successfull");
  } catch (err) {
    res.status(400).send("Signup Unsuccessfull",err);
  }
});
// login
app.post('/login',async(req,res)=>{
  const{email,password}=req.body;
  try{
    const user=await Signup.findOne({email:email});
    if(!user){
      return res.status(404).send("User not found");
    }
    if(user.password === password){
      res.status(200).send("Login Successful");
    }else{
      res.status(401).send("Incorrect Password");
    }
  }
  catch(err){
    res.status(500).send("Error during login");
  }
});

// get Signup details route
app.get('/getsignupdet',async(req,res)=>{
  
  try{
    const signUpdet=await Signup.find();
  res.status(200).json(signUpdet);
  }catch(err){
    res.status(500).send("Error fetching signup details");
  }
});
//update user details 
app.put('/updateuser',async(req,res)=>{
  const{id,...updates}=req.body;
  try{
    const updateUser =await Signup.findByIdAndUpdate(id,updates,{new:true});
    if(!updateUser){
      return res.status(404).send("User not found");
    }
    res.status(200).send("User details update successfull");
  }
  catch(err){
    res.status(500).send("Error updating user details");
  }
});

// Delete user 
app.delete('/deleteuser',async(req,res)=>{
  const{id}=req.body;
  try{
    const deleteUser=await Signup.findByIdAndDelete(id);
    if(!deleteUser){
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successdull");
  }
  catch(err){
    res.status(500).send("Error deleting user");
  }
});

app.listen(3001, () => {
  console.log("Server Started");
});
