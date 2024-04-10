const controller = ({
  listReviewsApplication,
  createReviewApplication,
  updateReviewApplication,
  response: { Success },
}) => ({
  index: async (req, res, next) => {
    try {
      const reviews = await listReviewsApplication();
      res.status(200).json(Success(reviews));
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res, next) => {
    try {
      const { body } = req;
      const review = await createReviewApplication(body);
      res.status(201).json(Success(review));
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { params } = req;
      const review = await updateReviewApplication(params.id);
      res.status(201).json(Success(review));
    } catch (error) {
      next(error);
    }
  },
});

module.exports = controller;
