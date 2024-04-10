/* eslint-disable no-undef */
const updateReview = require("./updateReviewApplication");

jest.mock("sequelize");

const mockReviewsRepo = {
  update: jest.fn(),
};

describe("updateReview: Updating Review Status", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should update the date_review for the specified review ID", async () => {
    const reviewId = 123;
    mockReviewsRepo.update.mockResolvedValue(); // Mock successful update

    await updateReview({ reviewsRepository: mockReviewsRepo })(reviewId);

    // Assertions
    expect(mockReviewsRepo.update).toHaveBeenCalledWith(
      { date_review: expect.any(Date) }, // Expect a Date object
      { where: { id: reviewId } }
    );
  });

  it("should handle potential update errors gracefully", async () => {
    const reviewId = 456;
    const mockError = new Error("Update failed!");
    mockReviewsRepo.update.mockRejectedValue(mockError);

    // Test with async/await for error handling
    await expect(
      updateReview({ reviewsRepository: mockReviewsRepo })(reviewId)
    ).rejects.toThrow(mockError);
  });
});
