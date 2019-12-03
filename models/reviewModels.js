const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  review_comment: {
    type: String,
    required: true
  },
  review_star: {
    type: Number,
    required: true
  },
  image: {
    type: Array,
    default: []
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;
