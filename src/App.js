import React, { useContext } from "react";
import Home from "./components/Home";
import Slots from "./components/Slots";
import { ViewContextProvider } from "./appView-context";
import ViewContext from "./appView-context";
import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import EditHotel from "./components/EditHotel.js";
import LoginForm from "./login";

function App() {
  const view = useContext(ViewContext);
  return (
    <div>
      <ViewContextProvider>
        {" "}
        <Routes>
          <Route path={"/"} element={<Navigate replace to="/login" />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path={"/home"} element={<Home />}></Route>
        </Routes>
      </ViewContextProvider>
    </div>
  );
}

export default App;
