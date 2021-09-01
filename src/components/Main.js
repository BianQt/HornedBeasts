import React from "react";
import HornedBeasts from "./HornedBeasts";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderArr: this.props.animals,
    };
  }

  submittion = (event) => {
    event.preventDefault();
    
    if (event.target.value === "all") {
      this.setState({
        renderArr: this.props.animals,
      });
    }
    if (event.target.value === "1") {
      this.setState({
        renderArr: this.props.animals.filter((element) => element.horns === 1),
      });
    }
    if (event.target.value === "2") {
      this.setState({
        renderArr: this.props.animals.filter((element) => element.horns === 2),
      });
    }
    if (event.target.value === "100") {
      this.setState({
        renderArr: this.props.animals.filter(
          (element) => element.horns === 100
        ),
      });
    }
    console.log(this.props.animals);
  };

  render() {
    return (
      <main>
        <Form.Select size="lg" onChange={this.submittion}>
          <option onClick="submit" value="all">
            All
          </option>
          <option onClick="submit" value="1">
            1 Horn
          </option>
          <option value="2">2 Horns</option>
          <option value="100">100 Horns</option>
        </Form.Select>

        {this.state.renderArr.map((animal) => {
          return (
            <HornedBeasts
              image_url={animal.image_url}
              title={animal.title}
              description={animal.description}
              keyword={animal.keyword}
              horns={animal.horns}
              handleShowMain={this.props.showFunction}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
