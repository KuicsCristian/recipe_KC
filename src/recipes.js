import React, { Component } from "react";
import { MDBNavLink } from "mdbreact";
import Logo from "./assets/images/logo_salad.png";

class Recipes extends Component {
  render() {
    const { reteta } = this.props;
    const { denumire, poza, ingrediente } = reteta;

    return (
      <>
        <div class="navbar-logo">
          <img alt="" src={Logo} class="rounded float-left"></img>
        </div>
        <div class="navbar-text1">DAIRY-FREE</div>
        <div class="navbar-text2">MEALS</div>

        <div class="card">
          <img alt=""
            src={"http://localhost/dbrecipes/" + poza}
            class="card-img-top img-fluid"
          />
          <div class="card-body">
            <h5 class="card-title">{denumire}</h5>
            <p class="card-text"></p>

            <ul className="ingredients">
              {ingrediente.map(ingredient => {
                const { idi, denumireing, continutcal } = ingredient;
                return (
                  <li key={idi} className="ingredient">
                    <span>{denumireing}</span>
                    <span>{continutcal} calorii</span>
                  </li>
                );
              })}
            </ul>

            <div className="total">
              <span>Total calorii:</span>
              <span>
                {ingrediente.reduce(
                  (totalCal, ingredient) =>
                    totalCal + parseInt(ingredient.continutcal),
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
