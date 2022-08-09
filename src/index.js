import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
const nameMap = new Map([
  [21, ['Monterey', '12']],
  [20, ['Big Sur', '11']],
  [19, ['Catalina', '10.15']],
  [18, ['Mojave', '10.14']],
  [17, ['High Sierra', '10.13']],
  [16, ['Sierra', '10.12']],
  [15, ['El Capitan', '10.11']],
  [14, ['Yosemite', '10.10']],
  [13, ['Mavericks', '10.9']],
  [12, ['Mountain Lion', '10.8']],
  [11, ['Lion', '10.7']],
  [10, ['Snow Leopard', '10.6']],
  [9, ['Leopard', '10.5']],
  [8, ['Tiger', '10.4']],
  [7, ['Panther', '10.3']],
  [6, ['Jaguar', '10.2']],
  [5, ['Puma', '10.1']]
]);

ReactDOM.render(
  <BrowserRouter>
    {" "}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
