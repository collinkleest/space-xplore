import React from "react";
import NavElement from "../Nav/NavElement/NavElement";
import NavBar from "../Nav/NavBar/NavBar";
import Home from "./Home";
import Rockets from "../Rockets/Rockets";
import Missions from "../Missons/Missions";
import LandingPads from "../LandingPads/LandingPads";
import History from "../History/History";
import MapContainer from "../LaunchPads/MapContainer";
import Launches from "../Launches/Launches";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  const [selection, setSelection] = React.useState("home");

  return (
    <div>
      <HashRouter>
        <NavBar onClick={(sel) => setSelection(sel)}>
          <NavElement
            linkText="Rockets"
            relativePath="/rockets"
            onClick={(sel) => setSelection(sel)}
          />

          <NavElement
            linkText="Landing Pads"
            relativePath="/landing-pads"
            onClick={(sel) => setSelection(sel)}
          />

          <NavElement
            linkText="Launch Pads"
            relativePath="/launch-pads"
            onClick={(sel) => setSelection(sel)}
          />

          <NavElement
            linkText="Missions"
            relativePath="/missions"
            onClick={(sel) => setSelection(sel)}
          />

          <NavElement
            linkText="History"
            relativePath="/history"
            onClick={(sel) => setSelection(sel)}
          />
          <NavElement
            linkText="Launches"
            relativePath="/launches"
            onClick={(sel) => setSelection(sel)}
          />
        </NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/landing-pads">
            <LandingPads />
          </Route>
          <Route path="/launch-pads">
            <MapContainer />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/launches">
            <Launches />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
