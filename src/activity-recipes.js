import React, { Component } from "react";
import Recipes from "./recipes";

class ActivityRecipes extends Component {
  render() {
    const { recipes } = this.props;

    if (recipes) {
      const listarecipes = Object.keys(recipes).map(item => (
        <Recipes key={item} recipe={recipes[item]} />
      ));

      return <div>{listarecipes}</div>;
    } else return null;
  }
}

export default ActivityRecipes;
