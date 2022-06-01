const db = require("./index");
const data = require("./sampleData");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
import axios from "axios";

const AnimeSchema = new mongoose.Schema({
  id: Number,
  news: String,
  videos: URL,
  pictures: String,
  reviews: String,
});

const Anime = mongoose.model("Anime", AnimeSchema);

const insertData = function () {
  Block.create(data)
    .then(() => console.log("Database seeded successfully"))
    .catch((error) => {
      console.log("error seeding");
    })
    .finally(() => db.close());
};

insertData();
