const controller = ({
  listLocationsApplication,
  createLocationApplication,
  response: { Success },
}) => ({
  index: async (req, res, next) => {
    try {
      const locations = await listLocationsApplication();
      res.status(200).json(Success(locations));
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res, next) => {
    try {
      const { body } = req;
      const location = await createLocationApplication(body);
      res.status(201).json(Success(location));
    } catch (error) {
      next(error);
    }
  },
});

module.exports = controller;
