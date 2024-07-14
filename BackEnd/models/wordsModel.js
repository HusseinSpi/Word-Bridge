const mongoose = require("mongoose");

const wordsSchema = new mongoose.Schema(
  {
    Ar: {
      type: String,
      required: true,
    },
    He: {
      type: String,
      required: true,
    },
    ArEn: {
      type: String,
      required: true,
    },
    HeEn: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Words = mongoose.model("Words", wordsSchema);

module.exports = Words;
