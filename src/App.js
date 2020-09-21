import React, { Fragment } from "react";
// style
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
// components
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
// packages
import { Router } from "@reach/router";

export default function () {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
    </div>
  );
}
