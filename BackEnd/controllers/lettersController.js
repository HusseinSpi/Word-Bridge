const Letters = require("../models/lettersModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllLetters = catchAsync(async (req, res, next) => {
  const letters = await Letters.find({});
  res.status(200).json({
    status: "success",
    data: letters,
  });
});

exports.addLetters = catchAsync(async (req, res, next) => {
  const newLetter = await Letters.create(req.body);
  res.status(201).json({
    status: "success",
    data: newLetter,
  });
});
