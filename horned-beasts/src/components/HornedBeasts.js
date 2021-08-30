import React from "react";

class HornedBeasts extends React.Component {
  render() {
    console.log("props: ", this.props);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>Number of horns: {this.props.horns}</p>
        <img src={this.props.image_url} alt="" />
      </div>
    );
  }
}

export default HornedBeasts;
