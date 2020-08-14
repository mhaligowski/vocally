import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

LogRocket.init("6ayqi7/vocallytest", {
  //@ts-ignore: Filled out by webpack.
  release: RELEASE,
});
setupLogRocketReact(LogRocket);

ReactDOM.render(<App></App>, document.getElementById("app"));
