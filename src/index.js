import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import axios from "axios";
import * as ReactDOMClient from "react-dom/client";

axios.defaults.baseURL = "http://localhost:3001/api/";
axios.defaults.headers.common["secret_token"] = localStorage.getItem("Token");
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   (response) => {
//     // Edit response config
//     return response;
//   },
//   (error) => {
//     // console.log(error);
//     if (error.response.data.message) {
//       return Promise.reject(error.response.data.message);
//     }
//     return Promise.reject(error);
//   }
// );

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
