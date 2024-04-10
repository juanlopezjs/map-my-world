/* eslint-disable no-undef */
const createLocation = require("./createLocationApplication");

// Mocking Sequelize functions
jest.mock("sequelize", () => {
  const SequelizeMock = {
    fn: jest.fn((func, arg1, arg2) => `ST_GeomFromText(${arg1}, ${arg2})`),
  };
  return {
    Sequelize: SequelizeMock,
  };
});

// Mocking locationsRepository
const mockLocationsRepository = {
  create: jest.fn(),
};

describe("createLocation", () => {
  it("should create a location with given latitude and longitude", async () => {
    // Arrange
    const args = {
      latitude: 40.7128,
      longitude: -74.006,
      name: "Nueva York",
    };
    const expectedData = {
      location: "ST_GeomFromText(POINT(40.7128 -74.006), 4326)",
      name: "Nueva York",
    };
    mockLocationsRepository.create.mockResolvedValueOnce(expectedData);

    // Act
    const result = await createLocation({
      locationsRepository: mockLocationsRepository,
    })(args);

    // Assert
    expect(result).toEqual(expectedData);
    expect(mockLocationsRepository.create).toHaveBeenCalledWith(expectedData);
  });
});
