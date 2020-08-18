/** @format */

import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class LaunchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launchImg:
        "https://live.staticflickr.com/1640/25214666645_58ce0a458c_3k.jpg",
      launch: {},
    };
    this.checkImage = this.checkImage.bind(this);
  }

  componentDidMount() {
    this.setState({ launch: this.props.launch });
    this.checkImage();
  }

  checkImage() {
    if (_.isEmpty(this.props.launch.links.flickr_images) === false) {
      this.setState({ launchImg: this.props.launch.links.flickr_images[0] });
    } else if (_.isEmpty(this.props.launch.links.mission_patch) === false) {
      this.setState({ launchImg: this.props.launch.links.mission_patch });
    } else if (
      _.isEmpty(this.props.launch.links.mission_patch_small) === false
    ) {
      this.setState({ launchImg: this.props.launch.links.mission_patch_small });
    } else {
      this.setState({
        launchImg:
          "https://live.staticflickr.com/1640/25214666645_58ce0a458c_3k.jpg",
      });
    }
  }

  render() {
    return (
      <div className="launchCard-wrapper card-wrapper  w-25">
        <img
          className="launch-img img-responsive"
          src={this.state.launchImg}
          alt={this.props.launch.mission_name + "_img"}
        />
        <h3 className="launch-title">{this.props.launch.mission_name}</h3>
        <p>
          <strong> Rocket: </strong>
          {this.props.launch.rocket.rocket_name}
        </p>
        <p>
          <strong> Flight Number: </strong>
          {this.props.launch.flight_number}
        </p>
        <button
          className="btn btn-dark"
          onClick={() => this.props.onClick(this.state.launch)}
        >
          View More
        </button>
      </div>
    );
  }
}
LaunchCard.propType = { launch: PropTypes.object, onClick: PropTypes.func };

export default LaunchCard;
