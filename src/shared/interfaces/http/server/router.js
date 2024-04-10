const { Router } = require("express");
const compression = require("compression");
const cors = require("cors");

const errorHandler = require("../middlewares/error_handler");
const httpLogger = require("../middlewares/http_logger");

const router = (dep) => {
  try {
    const routes = Router();
    const apiRouter = Router();
    const {
      logger,
      response: { Fail },
    } = dep;

    routes.use(httpLogger(logger));

    apiRouter.use(cors()).use(compression());

    const controllers = Object.keys(dep)
      .filter((reg) => reg.endsWith("Controller"))
      .reduce((obj, key) => {
        const objInstance = obj;
        objInstance[key] = dep[key];
        return objInstance;
      }, {});

    Object.keys(dep)
      .filter((reg) => reg.endsWith("Route"))
      .forEach((route) => {
        const routerInstance = dep[route];
        apiRouter.use(
          `/${route.replace("Route", "")}`,
          routerInstance({ apiRouter: Router(), ...controllers })
        );
      });

    routes.use("/api", apiRouter);

    routes.use((err, req, res, next) => {
      errorHandler(err, res, logger, Fail);
      next(err);
    });

    return routes;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  router,
};
