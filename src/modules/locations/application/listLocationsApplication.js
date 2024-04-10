const listLocations =
  ({ locationsRepository }) =>
  async () =>
    await locationsRepository.findAll();

module.exports = listLocations;
