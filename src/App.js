import React, { Component } from "react";
import Antet from "./antet";
import Nav from "./nav";
import ActivityRecipes from "./activity-recipes";
import ActivityMeals from "./activity-meals";
import ActivityIngredients from "./activity-ingredients";
import Home from "./home";
import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ingredients: []
    };

    this.reincarc = this.reincarc.bind(this);
    this.reincarcIng = this.reincarcIng.bind(this);
  }

  reincarc() {
    return fetch("http://localhost/dbrecipes/api/recipes.php")
      .then(rezultat => {
        return rezultat.json();
      })
      .then(listarecipes => this.setState({ recipes: listarecipes }))
      .catch(error => console.log("Request failed: ", error));
  }

  reincarcIng() {
    return fetch("http://localhost/dbrecipes/api/ingredients.php")
      .then(rezultat => {
        return rezultat.json();
      })
      .then(listaingredients =>
        this.setState({ ingredients: listaingredients })
      )
      .catch(error => console.log("Request failed: ", error));
  }

  componentDidMount() {
    this.reincarc();
    this.reincarcIng();
  }

  render() {
    return (
      <>
        <Antet />
        <div>
          <div className="row">
            <div className="col-md-2">
              <Nav />
            </div>
            <div className="col-md-10">
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route
                  exact
                  path="/masa"
                  render={props => (
                    <div>
                      <ActivityMeals recipes={this.state.recipes} />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/adauga-recipe"
                  render={props => (
                    <div>
                      <ActivityIngredients
                        ingredients={this.state.ingredients}
                      />
                    </div>
                  )}
                />
                <div className="paddingtop">
                  <div className="card-columns">
                    <Route
                      exact
                      path="/recipes"
                      render={props => (
                        <div>
                          <ActivityRecipes recipes={this.state.recipes} />
                        </div>
                      )}
                    />
                  </div>
                </div>
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
