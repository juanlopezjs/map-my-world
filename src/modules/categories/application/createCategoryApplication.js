const createCategory =
  ({ categoriesRepository }) =>
  async (args) => {
    await categoriesRepository.create(args);
  };

module.exports = createCategory;
