import * as React from "react";
import { render } from "react-dom";

import Globe from "./Globe";

import "./styles.css";

function App() {
  return <Globe />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
