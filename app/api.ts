// https://tanstack.com/router/latest/docs/framework/react/start/api-routes

import {
  createStartAPIHandler,
  defaultAPIFileRouteHandler,
} from "@tanstack/start/api";

export default createStartAPIHandler(defaultAPIFileRouteHandler);
