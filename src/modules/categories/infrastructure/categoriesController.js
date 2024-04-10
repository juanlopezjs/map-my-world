const controller = ({
  listCategoriesApplication,
  createCategoryApplication,
  response: { Success },
}) => ({
  index: async (req, res, next) => {
    try {
      const categories = await listCategoriesApplication();
      res.status(200).json(Success(categories));
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res, next) => {
    try {
      const { body } = req;
      const category = await createCategoryApplication(body);
      res.status(201).json(Success(category));
    } catch (error) {
      next(error);
    }
  },
});

module.exports = controller;
