import React from "react";
import Axios from "axios";
import LaunchCard from "./LaunchCard";
import MoreInfo from "./MoreInfo";
import "./Launches.sass";

class Launches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      displayMoreInfo: false,
      moreInfoLaunch: {},
      //moreInfoLaunchElement: <div></div>,
    };
    this.getLaunches = this.getLaunches.bind(this);
    this.showMoreInfo = this.showMoreInfo.bind(this);
  }

  componentDidMount() {
    this.getLaunches();
  }

  getLaunches() {
    Axios.get("https://api.spacexdata.com/v3/launches")
      .then((res) => this.setState({ launches: res.data }))
      .catch((err) => console.log(err));
  }

  showMoreInfo(childData) {
    this.setState({
      displayMoreInfo: !this.state.displayMoreInfo,
      moreInfoLaunch: childData,
    });
  }

  render() {
    let moreInfoLaunch;
    if (this.state.displayMoreInfo) {
      moreInfoLaunch = (
        <MoreInfo
          launch={this.state.moreInfoLaunch}
          onClose={() => {
            this.setState({ displayMoreInfo: !this.state.displayMoreInfo });
          }}
        />
      );
    } else {
      moreInfoLaunch = <div></div>;
    }

    return (
      <div className="main-wrapper">
        <div className="launches-wrapper">
          {this.state.launches.map((launch) => {
            return (
              <LaunchCard
                key={launch.flight_number}
                launch={launch}
                onClick={this.showMoreInfo}
              />
            );
          })}
          {moreInfoLaunch}
        </div>
      </div>
    );
  }
}

export default Launches;
