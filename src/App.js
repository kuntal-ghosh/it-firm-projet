import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/hoc/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Switch, Route, Link } from "react-router-dom";
import Previews from "./pages/MultipleImageForm/MultipleImageForm";
import CustomizedImage from "./pages/customized-image/CustomizedImage";
import TShirtLogoTextContext from "./context/TShirtLogoTextContext";
function App() {
  const [boxes, setBoxes] = useState({
    b: { top: 150, left: 140, title: "" },
  });
  return (
    <Layout>
      <Switch>
        <Route path="/multiple-image">
          <Previews />
        </Route>
        <Route path="/customize-image">
          <TShirtLogoTextContext.Provider value={[boxes, setBoxes]}>
            <CustomizedImage />
          </TShirtLogoTextContext.Provider>
        </Route>

        <Route path="/">
          <LandingPage />
        </Route>
        {/* <LandingPage /> */}
      </Switch>
    </Layout>
  );
}

export default App;
