const { Sequelize } = require("sequelize");

const createLocation =
  ({ locationsRepository }) =>
  async (args) => {
    const { latitude, longitude, name } = args;
    const data = {
      name,
      location: Sequelize.fn(
        "ST_GeomFromText",
        `POINT(${latitude} ${longitude})`,
        "4326"
      ),
    };
    return await locationsRepository.create(data);
  };

module.exports = createLocation;
