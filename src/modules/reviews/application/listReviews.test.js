/* eslint-disable no-undef */
const listReviews = require("./listReviewsApplication");

// Mock del repositorio de reviews
const reviewsRepositoryMock = {
  findAll: jest.fn().mockResolvedValue([
    { id: 1, createdAt: new Date(), date_review: null },
    { id: 2, createdAt: new Date(), date_review: null },
  ]),
};

describe("listReviews", () => {
  it("should return reviews from the last 30 days with no review date", async () => {
    const result = await listReviews({
      reviewsRepository: reviewsRepositoryMock,
    })();

    expect(reviewsRepositoryMock.findAll).toHaveBeenCalledWith({
      limit: 10,
      where: {
        createdAt: expect.objectContaining({
          [Symbol.for(">=")]: expect.any(Date),
        }),
        date_review: { [Symbol.for("is")]: null },
      },
    });
    expect(result).toHaveLength(2);
  });

  it("debería devolver el resultado de findAll", async () => {
    const mockReviews = [
      { id: 1, text: "Review 1" },
      { id: 2, text: "Review 2" },
    ];
    reviewsRepositoryMock.findAll.mockResolvedValue(mockReviews);

    const result = await listReviews({
      reviewsRepository: reviewsRepositoryMock,
    })();

    expect(result).toEqual(mockReviews);
  });
});
