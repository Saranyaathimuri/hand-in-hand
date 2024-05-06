const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000; // or any port you prefer

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/srp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a schema for user data
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle user sign-up
app.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const newUser = new User({
      fullName,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "User signed up successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
