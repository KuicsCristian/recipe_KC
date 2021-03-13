import React, { Component } from "react";
import Recipes from "./recipes";

class ActivityRecipes extends Component {
  render() {
    const { retete } = this.props;

    if (retete) {
      const listaRetete = Object.keys(retete).map(item => (
        <Recipes key={item} reteta={retete[item]} />
      ));

      return <div>{listaRetete}</div>;
    } else return null;
  }
}

export default ActivityRecipes;
