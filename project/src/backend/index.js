const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./loginModel"); // Import UserModel

const Workermodel = require('./WorkerReg');
const multer = require('multer');
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

// MongoDB connection setup
mongoose.connect("mongodb+srv://jerin:jerin@cluster0.vlqctt0.mongodb.net/worker-client?retryWrites=true&w=majority", {
  useNewUrlParser: true, // Add useNewUrlParser option
  useUnifiedTopology: true // Add useUnifiedTopology option
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Endpoint for user signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user with provided email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      // User already exists
      return res.send("exist");
    } else {
      // User doesn't exist, create a new user
      await UserModel.create({ email, password });
      return res.send("notexist");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

// Endpoint for user login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email, password });
    if (user) {
      return res.json({ success: true, message: "Login Successfully" });
    } else {
      return res.json({ success: false, message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.get('/view', async (request, response) => {
  try {
    const data = await Workermodel.find(); // Add try-catch block
    response.send(data);
  } catch (error) {
    console.error(error);
    response.status(500).send("Server Error");
  }
});

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
