module.exports = ({ apiRouter, locationsController }) => {
  apiRouter.get("/", locationsController.index);
  apiRouter.post("/", locationsController.store);

  return apiRouter;
};
