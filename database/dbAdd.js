const db = require("./index");
const data = require("./sampleData");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  id: Number,
  user: String,
  body: String,
});

const Review = mongoose.model("Review", reviewSchema);

const getReview = function () {
  console.log("database")
  return Review.find();
};

const addReview = function (id, user, body) {
  return Review.create({ id: id, user: user, body: body });
};

const insertData = function () {
  console.log(data.sampleData);
  // Review.create(data.sampleData)
  //   .then(() => console.log("Database seeded successfully"))
  //   .catch((error) => {
  //     console.log(error);
  //   })
  //   .finally(() => db.close());
};

module.exports = { addReview, getReview };
