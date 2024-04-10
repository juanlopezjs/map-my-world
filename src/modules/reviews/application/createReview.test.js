/* eslint-disable no-undef */
const createReview = require("./createReviewApplication");

// Mock de reviewsRepository para simular su comportamiento
const mockReviewsRepository = {
  create: jest.fn(),
};

describe("createReview", () => {
  it("debería llamar a reviewsRepository.create con los argumentos proporcionados", async () => {
    const args = {
      id_location: "1",
      id_category: "2",
    };

    await createReview({ reviewsRepository: mockReviewsRepository })(args);

    expect(mockReviewsRepository.create).toHaveBeenCalledWith(args);
  });

  it("debería devolver el resultado de reviewsRepository.create", async () => {
    const args = {
      id_location: "1",
      id_category: "2",
    };
    const expectedResult = {
      id: "1",
      id_location: "1",
      id_category: "2",
    };
    mockReviewsRepository.create.mockResolvedValue(expectedResult);

    const result = await createReview({
      reviewsRepository: mockReviewsRepository,
    })(args);

    expect(result).toEqual(expectedResult);
  });
});
