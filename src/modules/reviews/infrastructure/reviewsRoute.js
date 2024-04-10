module.exports = ({ apiRouter, reviewsController }) => {
  apiRouter.get("/", reviewsController.index);
  apiRouter.post("/", reviewsController.store);
  apiRouter.patch("/:id", reviewsController.update);

  return apiRouter;
};
