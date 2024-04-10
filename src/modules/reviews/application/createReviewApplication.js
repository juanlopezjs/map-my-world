const createReview =
  ({ reviewsRepository }) =>
  async (args) =>
    await reviewsRepository.create(args);

module.exports = createReview;
