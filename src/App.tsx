import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import clsx from "clsx";

import getLogger from "log";
import { Container } from "react-bootstrap";
import Hello from "pages/Hello";
import Preview from "pages/Preview";
import Result from "pages/Result";
import Detection from "pages/Detection";

const LOG = getLogger();

export default () => {
  LOG.info("Starting app.");
  return (
    <Container>
      <Router>
        <header className={clsx("text-center", "mt-5")}>
          <Link to="/" className={clsx("navbar-brand")}>
            <h1 className={clsx("display-1", "text-primary", "title")}>
              vocally
            </h1>
          </Link>
        </header>

        <main className={clsx("pb-5")} role="main">
          <Switch>
            <Route path="/preview">
              <Preview next="/record" />
            </Route>
            <Route path="/record">
              <Detection next="/summary" reference={60} timeout={3000} />
            </Route>
            <Route path="/summary">
              <Result />
            </Route>
            <Route path="/">
              <Hello next="/preview" />
            </Route>
          </Switch>
        </main>

        <footer className={clsx("py-3", "border-top", "text-muted")}>
          <Container>
            <p>2020-2021 vocally.app</p>
          </Container>
        </footer>
      </Router>
    </Container>
  );
};
