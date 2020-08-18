/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-title-wrapper container">
      <h1 className="display-1 text-white">SPACE-XPLORE</h1>
      <hr className="home-line" />
      <h1 className="display-4 text-white ml-3">COLLIN KLEEST</h1>
      <div className="ml-3">
        <Link to="/rockets" className="btn m-2 btn-outline-light">
          Rockets
        </Link>
        <Link to="/launch-pads" className="btn m-2 btn-outline-light">
          Launch Pads
        </Link>
        <Link to="/missions" className="btn m-2 btn-outline-light">
          Missions
        </Link>
        <Link to="/launches" className="btn m-2 btn-outline-light">
          Launches
        </Link>
        <Link to="/landing-pads" className="btn m-2 btn-outline-light">
          Landing Pads
        </Link>
        <Link to="/history" className="btn m-2 btn-outline-light">
          History
        </Link>
      </div>
    </div>
  );
}
