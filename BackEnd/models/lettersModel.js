const mongoose = require("mongoose");

const lettersSchema = new mongoose.Schema(
  {
    Ar: {
      type: String,
      required: true,
    },
    He: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Letters = mongoose.model("Letters", lettersSchema);

module.exports = Letters;
