// https://tanstack.com/router/latest/docs/framework/react/start/getting-started#the-client-entry-point

/// <reference types="vinxi/types/client" />
import { StartClient } from "@tanstack/react-start";
import { hydrateRoot } from "react-dom/client";

import { createRouter } from "./router";

const router = createRouter();

export default hydrateRoot(document, <StartClient router={router} />);
