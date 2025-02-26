// https://tanstack.com/router/latest/docs/framework/react/start/getting-started#the-server-entry-point

import { getRouterManifest } from "@tanstack/react-start/router-manifest";
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

import { createRouter } from "./router";

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
