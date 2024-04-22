const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://adk:Adk209#@@db.rzx3tks.mongodb.net/yourDatabaseNameHere", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB connected");
})
.catch(err => {
  console.error("Connection error:", err);
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  phoneno: String, // Change Float32Array to String or Number
});

const UserModel = mongoose.model("DB", userSchema);

module.exports = UserModel;
