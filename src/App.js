import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SelectedBeast from "./components/SelectedBeast";
import hornedAnimals from "./components/data.json";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.title = " ";
    this.image_url = " ";
    this.description = " ";
    this.keyword = " ";
    this.horns = " ";
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (title, img, des) => {
    this.setState({
      show: true,
    });
    this.title = title;
    this.image_url = img;
    this.description = des;
  };

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Main animals={hornedAnimals} showFunction={this.handleShow} />
        </main>
        <footer>
          {this.state.test}
          <Footer />
        </footer>
        <SelectedBeast
          show={this.state.show}
          image_url={this.image_url}
          title={this.title}
          description={this.description}
          keyword={this.keyword}
          horns={this.horns}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default App;
