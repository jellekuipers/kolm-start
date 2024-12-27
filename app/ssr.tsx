// https://tanstack.com/router/latest/docs/framework/react/start/getting-started#the-server-entry-point

import { getRouterManifest } from "@tanstack/start/router-manifest";
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";

import { createRouter } from "./router";

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
