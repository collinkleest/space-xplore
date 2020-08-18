import React from "react";
import Navigation from '../Nav';
import Home from "./Home";
import Rockets from "../Rockets/Rockets";
import Missions from "../Missons/Missions";
import LandingPads from "../LandingPads/LandingPads";
import History from "../History/History";
import MapContainer from "../LaunchPads/MapContainer";
import Launches from "../Launches/Launches";
import { HashRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Navigation />
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
