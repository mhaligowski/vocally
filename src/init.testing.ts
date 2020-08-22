import * as Sentry from "@sentry/react";
import { CaptureConsole } from "@sentry/integrations";
import { Integrations as ApmIntegrations } from "@sentry/apm";

import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

export default () => {
  Sentry.init({
    dsn:
      "https://ffe439ac65b84889a37518037a23a7b1@o433557.ingest.sentry.io/5388917",
    release: "RELEASE",
    environment: "testing",
    integrations: [
      new CaptureConsole({
        levels: ["info"],
      }),
      new ApmIntegrations.Tracing(),
    ],
  });

  LogRocket.init("6ayqi7/vocallytest", {
    release: "RELEASE",
  });
  setupLogRocketReact(LogRocket);
};
