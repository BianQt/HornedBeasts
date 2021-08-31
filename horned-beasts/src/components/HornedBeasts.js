import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  likesFunction = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
    this.props.handleShowMain(this.props.title,this.props.image_url,this.props.description);
  };

  render() {
    return (
      <Card style={{ width: "21rem", margin:"20px", display: "inline-block"}}>
        <Card.Img
          variant="top"
          src={this.props.image_url}
          onClick={this.likesFunction}
          style={{ height: "18rem"}}
        />
        <Card.Body>
          <Card.Title style={{ height: "35px"}}>{this.props.title}</Card.Title>
          <Card.Text   style={{ height: "5.1rem"}}>{this.props.description}</Card.Text>
          <p  style={{ fontSize: "1.5rem"}}>❤️ {this.state.likes} <Button  style={{ marginLeft: "10.5rem",  fontSize: "1.2rem"}} onClick={this.likesFunction} variant="primary">Like</Button></p>
        </Card.Body>
      </Card>
    );
  }
}


export default HornedBeasts;
