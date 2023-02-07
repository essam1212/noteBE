const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

}, {
  timestamps: true
});


const noteModel = mongoose.model("Note", noteSchema);


module.exports = noteModel;