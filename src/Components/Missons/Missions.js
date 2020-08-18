/** @format */

import React from "react";
import Axios from "axios";
import "./Missions.sass";
import MissionCard from "./MissionCard";

class Missions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missions: [],
    };
    this.getMissions = this.getMissions.bind(this);
  }

  componentDidMount() {
    this.getMissions();
  }

  getMissions() {
    Axios.get("https://api.spacexdata.com/v3/missions")
      .then((res) => {
        this.setState({ missions: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="main-wrapper mt-5">
        {this.state.missions.map((mis) => {
          return <MissionCard mission={mis} key={mis.mission_id} />;
        })}
      </div>
    );
  }
}

export default Missions;
