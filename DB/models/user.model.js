const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
   gender: {
    type: String,
    enums: ["Male", "Female"],
    default:"Male"
  },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],

  isBlocked: Boolean,
   }, {
  timestamps:true
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hashSync(this.password,parseInt(process.env.saltRounds))
})
const userModel = mongoose.model("User", userSchema);


module.exports = userModel;