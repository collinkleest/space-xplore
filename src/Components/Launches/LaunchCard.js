import React from 'react';

class LaunchCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            launchImg: "https://live.staticflickr.com/1640/25214666645_58ce0a458c_3k.jpg"
        }
        this.checkImage = this.checkImage.bind(this);
    }

    componentDidMount(){
        this.checkImage();
    }

    checkImage(){
        if ((_.isEmpty(this.props.launch.links.flickr_images)) === false){
            this.setState({launchImg: this.props.launch.links.flickr_images[0]}); 
        }
        else if (_.isEmpty((this.props.launch.links.mission_patch)) === false){
            console.log('in mission patch');
            this.setState({launchImg: this.props.launch.links.mission_patch});
        }
        else if (_.isEmpty(this.props.launch.links.mission_patch_small) === false){
            console.log('in small mission patch');
            this.setState({launchImg: this.props.launch.links.mission_patch_small});
        }
        else {
            this.setState({launchImg: "https://live.staticflickr.com/1640/25214666645_58ce0a458c_3k.jpg"});
        }
    }

    render(){
        return(
            <div className="launchCard-wrapper card-wrapper">
                <img className="launch-img" src={ this.state.launchImg } alt={ (this.props.launch.mission_name + "_img") } />
                <h3 className="launch-title"> { this.props.launch.mission_name} </h3>
                <p> <strong> Rocket: </strong> {this.props.launch.rocket.rocket_name} </p>
                <p> <strong> Flight Number: </strong> {this.props.launch.flight_number} </p>
            </div>
        );
    }
}

export default LaunchCard;