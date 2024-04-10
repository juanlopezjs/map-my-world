const { Op } = require("sequelize");

const listReviews =
  ({ reviewsRepository, database, reviewDTO }) =>
  async () => {
    const currentDate = new Date();
    const thirtyDaysAgo = new Date(
      currentDate.setDate(currentDate.getDate() - 30)
    );
    const { Category, Location } = database.models;
    const response = await reviewsRepository.findAll({
      include: [
        {
          model: Category,
        },
        {
          model: Location,
        },
      ],
      limit: 10,
      where: {
        createdAt: {
          [Op.gte]: thirtyDaysAgo,
        },
        date_review: {
          [Op.is]: null,
        },
      },
    });

    return response.map((review) =>
      reviewDTO(
        review.id,
        review.Location.id,
        review.Location.id,
        review.Location.location.coordinates[0],
        review.Location.location.coordinates[1],
        review.Category.id,
        review.Category.name,
        review.createdAt,
        review.updateAt
      )
    );
  };

module.exports = listReviews;
