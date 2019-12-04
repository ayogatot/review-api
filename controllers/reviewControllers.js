const fs = require("fs");
const Review = require("../models/reviewModels");

const { sendResponse, convertImagesBuffer } = require("../helpers/index");

module.exports = {
  createReview: async (req, res) => {
    try {
      const image = convertImagesBuffer(req.files);
      const { name, review_comment, review_star } = req.body;
      const newReview = { name, review_comment, review_star, image };
      const review = new Review(newReview);

      await review.save().then(result => {
        sendResponse(res, 200, {
          id: result._id,
          msg: "Review has been created"
        });
      });
    } catch (error) {
      sendResponse(res, 500, { error });
    }
  },

  getAllReview: async (req, res) => {
    try {
      await Review.find()
        .exec()
        .then(result => {
          sendResponse(res, 200, result);
        });
    } catch (error) {
      sendResponse(res, 500, { error });
    }
  },

  getReviewById: async (req, res) => {
    try {
      const id = req.params.id;

      await Review.findById(id, (err, result) => {
        if (err) sendResponse(res, 500, { err });
        sendResponse(res, 200, result);
      });
    } catch (error) {
      sendResponse(res, 500, { error });
    }
  },

  updateReviewById: async (req, res) => {
    try {
      const id = req.params.id;
      const image = convertImagesBuffer(req.files);
      const { name, review_comment, review_star } = req.body;
      const newReview = { name, review_comment, review_star, image };

      await Review.findByIdAndUpdate(id, newReview, (err, result) => {
        if (err) sendResponse(res, 500, { err });
        sendResponse(res, 200, {
          id: result._id,
          msg: "Review has been updated"
        });
      });
    } catch (error) {
      sendResponse(res, 500, { error });
    }
  }
};
