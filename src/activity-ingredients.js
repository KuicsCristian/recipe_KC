import React, { Component } from "react";
import AddRecipes from "./addrecipes";
import { MDBNavLink } from "mdbreact";

class ActivityIngredients extends Component {
  render() {
    const { ingredients } = this.props;

    if (ingredients) {
      const listaingredients = Object.keys(ingredients).map(item => (
        <AddRecipes key={item} ingredient={ingredients[item]} />
      ));

      return (
        <>
          <div className="addRecipess" style={{ paddingTop: "50px" }}>
            <div style={{ backgroundColor: "#32cd32" }}>
              <h3
                style={{
                  marginLeft: "100px",
                  paddingTop: "40px",
                  paddingBottom: "40px",
                  color: "rgb(237, 237, 237)"
                }}
              >
                Adaugă o nouă rețetă
              </h3>
            </div>

            <div
              style={{
                width: "600px",
                marginLeft: "100px",
                paddingTop: "30px"
              }}
            >
              <label>Titlul rețetei</label>
              <input
                type="text"
                class="form-control"
                id="validationTooltip01"
                placeholder="Denumirea rețetei"
              ></input>
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlFile1"
                style={{
                  width: "300px",
                  marginLeft: "100px",
                  paddingTop: "30px"
                }}
              >
                Adaugă imagine:
              </label>
              <input
                style={{
                  width: "300px",
                  marginLeft: "100px"
                }}
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
              ></input>
            </div>

            <form
              style={{
                marginLeft: "100px",
                marginRight: "80px"
              }}
            >
              <h6
                style={{
                  width: "300px",
                  paddingTop: "30px"
                }}
              >
                Selectează ingredients:
              </h6>
              <div>{listaingredients}</div>

              <div>
                <label
                  for="textarea"
                  style={{
                    width: "300px",
                    paddingTop: "30px"
                  }}
                >
                  Mod de preparare:
                </label>
                <textarea
                  style={{ paddingBottom: "100px", color: "rgb(50, 205, 50)" }}
                  class="form-control"
                  placeholder="Descrie modul de preparare..."
                ></textarea>
              </div>
            </form>
            <div style={{ textAlign: "center", paddingBottom: "50px" }}>
              {" "}
              <MDBNavLink
                to="/home"
                class="btn btn-success"
                style={{ paddingTop: "25px" }}
              >
                ADAUGĂ
              </MDBNavLink>
            </div>
          </div>
          <div style={{ paddingBottom: "100px" }}></div>
        </>
      );
    } else return null;
  }
}

export default ActivityIngredients;
