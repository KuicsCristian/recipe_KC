import React, { Component } from "react";
import { MDBNavLink } from "mdbreact";
import Logo from "./assets/images/logo_salad.png";

class Recipes extends Component {
  render() {
    const { recipe } = this.props;
    const { denumire, picture, ingredients } = recipe;

    return (
      <>
        <div class="navbar-logo">
          <img alt="" src={Logo} class="rounded float-left"></img>
        </div>
        <div class="navbar-text1">DAIRY-FREE</div>
        <div class="navbar-text2">MEALS</div>

        <div class="card">
          <img alt=""
            src={"http://localhost/dbrecipes/" + picture}
            class="card-img-top img-fluid"
          />
          <div class="card-body">
            <h5 class="card-title">{denumire}</h5>
            <p class="card-text"></p>

            <ul className="ingredients">
              {ingredients.map(ingredient => {
                const { iding, ingname, calcont } = ingredient;
                return (
                  <li key={iding} className="ingredient">
                    <span>{ingname}</span>
                    <span>{calcont} calorii</span>
                  </li>
                );
              })}
            </ul>

            <div className="total">
              <span>Total calorii:</span>
              <span>
                {ingredients.reduce(
                  (totalCal, ingredient) =>
                    totalCal + parseInt(ingredient.calcont),
                  2
                )}
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              {" "}
              <MDBNavLink
                to="/masa"
                class="btn btn-danger"
                style={{
                  backgroundColor: "#32cd32",
                  borderColor: "#32cd32",
                  width: "200px",
                  height: "40px"
                }}
              >
                Mod de preparare
              </MDBNavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Recipes;
