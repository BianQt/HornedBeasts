import React from "react";
import HornedBeasts from "./HornedBeasts";
import hornedAnimals from "./data.json";

let animalsList = hornedAnimals.map((animal) => {

  return <HornedBeasts
    image_url={animal.image_url}
    title={animal.title}
    description={animal.description}
    keyword={animal.keyword}
    horns={animal.horns} />;
});

class Main extends React.Component {
  render() {
    return <main>{animalsList}</main>;
  }
}

export default Main;
