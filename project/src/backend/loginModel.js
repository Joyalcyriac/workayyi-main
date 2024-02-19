const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jerin:jerin@cluster0.vlqctt0.mongodb.net/worker-client?retryWrites=true&w=majority")
  .then(() => {
    console.log("DB Connected");
  })
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true 
  }
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
