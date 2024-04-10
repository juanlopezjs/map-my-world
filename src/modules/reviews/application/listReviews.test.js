/* eslint-disable no-undef */
const { Op } = require("sequelize");
const listReviews = require("./listReviewsApplication");

// Mock de dependencias
const reviewsRepositoryMock = {
  findAll: jest.fn(),
};

const databaseMock = {
  models: {
    Category: jest.fn(),
    Location: jest.fn(),
  },
};

const reviewDTOMock = jest.fn();

describe("listReviews", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return an array of transformed reviews", async () => {
    // Mock de datos de prueba
    const review1 = {
      id: 1,
      Location: { id: 1, location: { coordinates: [1, 2] } },
      Category: { id: 1, name: "Category1" },
      createdAt: new Date(),
      updateAt: new Date(),
    };
    const review2 = {
      id: 2,
      Location: { id: 2, location: { coordinates: [3, 4] } },
      Category: { id: 2, name: "Category2" },
      createdAt: new Date(),
      updateAt: new Date(),
    };

    const reviewsRepositoryResponse = [review1, review2];
    reviewsRepositoryMock.findAll.mockResolvedValue(reviewsRepositoryResponse);

    await listReviews({
      reviewsRepository: reviewsRepositoryMock,
      database: databaseMock,
      reviewDTO: reviewDTOMock,
    })();

    // Verificación de que la función findAll fue llamada con los parámetros correctos
    expect(reviewsRepositoryMock.findAll).toHaveBeenCalledWith({
      include: [
        { model: databaseMock.models.Category },
        { model: databaseMock.models.Location },
      ],
      limit: 10,
      where: {
        createdAt: { [Op.gte]: expect.any(Date) },
        date_review: { [Op.is]: null },
      },
    });

    // Verificación de que la función de transformación fue llamada con los parámetros correctos
    expect(reviewDTOMock).toHaveBeenCalledWith(
      review1.id,
      review1.Location.id,
      review1.Location.id,
      review1.Location.location.coordinates[0],
      review1.Location.location.coordinates[1],
      review1.Category.id,
      review1.Category.name,
      review1.createdAt,
      review1.updateAt
    );
    expect(reviewDTOMock).toHaveBeenCalledWith(
      review2.id,
      review2.Location.id,
      review2.Location.id,
      review2.Location.location.coordinates[0],
      review2.Location.location.coordinates[1],
      review2.Category.id,
      review2.Category.name,
      review2.createdAt,
      review2.updateAt
    );
  });
});
