const express = require("express");
const Router = express.Router();

const reviewController = require("../controllers/reviewControllers");

Router.route("/")
  .get(reviewController.getAllReview)
  .post(reviewController.createReview);

Router.route("/:id")
  .get(reviewController.getReviewById)
  .patch(reviewController.updateReviewById)
  .delete(reviewController.deleteReviewById);

module.exports = Router;
