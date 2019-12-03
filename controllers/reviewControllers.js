const Review = require("../models/reviewModels");

module.exports = {
  createReview: async (req, res) => {
    try {
      const { name, review_comment, review_star } = req.body;
      const newReview = { name, review_comment, review_star };
      console.log(newReview);
      const review = new Review(newReview);

      await review.save().then(result => {
        res.status(200).json({
          id: result._id,
          msg: "Review has been created"
        });
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getAllReview: async (req, res) => {
    try {
      await Review.find()
        .exec()
        .then(result => {
          res.status(200).json({
            data: result
          });
        });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
