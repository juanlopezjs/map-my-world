const updateReview =
  ({ reviewsRepository }) =>
  async (id) => {
    await reviewsRepository.update(
      {
        date_review: new Date(),
      },
      {
        where: {
          id,
        },
      }
    );
  };

module.exports = updateReview;
