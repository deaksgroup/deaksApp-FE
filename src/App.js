import React, { useContext } from "react";
import Home from "./components/Home";
import { ViewContextProvider } from "./appView-context";
import ViewContext from "./appView-context";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./login";
import TermsConditions from "./components/leagal/TermsConditions";
import PrivacyPolicy from "./components/leagal/PrivacyPolicy";

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
          <Route path={"/privacy-policy"} element={<PrivacyPolicy />}></Route>
          <Route path={"/terms-condition"} element={<TermsConditions />}></Route>
        </Routes>
      </ViewContextProvider>
    </div>
  );
}

export default App;
