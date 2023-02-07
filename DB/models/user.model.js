import { Schema, model } from "mongoose";
import { hashSync } from 'bcrypt';


const userSchema = new Schema({
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
  notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],

  isBlocked: Boolean,
   }, {
  timestamps:true
});

userSchema.pre("save", async function (next) {
  this.password = await hashSync(this.password,parseInt(process.env.saltRounds))
})
const userModel = model("User", userSchema);


export default userModel;