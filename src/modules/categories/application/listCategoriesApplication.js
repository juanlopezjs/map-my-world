const listCategories =
  ({ categoriesRepository }) =>
  async () =>
    await categoriesRepository.findAll();

module.exports = listCategories;
