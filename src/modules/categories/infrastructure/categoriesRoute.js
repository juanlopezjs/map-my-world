module.exports = ({ apiRouter, categoriesController }) => {
  apiRouter.get("/", categoriesController.index);
  apiRouter.post("/", categoriesController.store);

  return apiRouter;
};
