const express = require("express");
const Router = express.Router();

const reviewController = require("../controllers/reviewControllers");

Router.route("/")
  .get(reviewController.getAllReview)
  .post(reviewController.createReview);

module.exports = Router;
