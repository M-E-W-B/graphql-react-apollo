const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model(
  "Movie",
  new Schema({
    title: String,
    year: Number,
    imdbId: String,
    mtype: {
      type: String,
      enum: ["MOVIE", "TVSERIES"]
    },
    poster: String,
    createdAt: { type: Date, default: Date.now }
  })
);
