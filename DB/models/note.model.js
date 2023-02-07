import { Schema, model } from "mongoose";


const noteSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },

}, {
  timestamps: true
});


const noteModel = model("Note", noteSchema);


export default noteModel;