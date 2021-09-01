import React from "react";
import HornedBeasts from "./HornedBeasts";
// import hornedAnimals from "./data.json";


class Main extends React.Component {

  // handleShowMain = (tit ,img, des ) => {
  //   this.props.showFunction(tit, img, des);
  //   console.log(tit, img, des);
  // };

  render() {
    
    return (
      <main>
        {this.props.animals.map((animal) => {
          return (
            <HornedBeasts
              image_url={animal.image_url}
              title={animal.title}
              description={animal.description}
              keyword={animal.keyword}
              horns={animal.horns}
              handleShowMain ={this.props.showFunction}
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
