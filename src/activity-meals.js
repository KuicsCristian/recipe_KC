import React, { Component } from "react";
import Meals from "./meals";

class ActivityMeals extends Component {
  render() {
    const { recipes } = this.props;

    if (recipes) {
      const listarecipes = Object.keys(recipes).map(item => (
        <Meals key={item} reteta={recipes[item]} />
      ));

      return (
        <>
          <div
            className="row"
            style={{ marginBottom: "100px", paddingTop: "50px" }}
          >
            <div className="col-md-6">
              <span
                class="badge badge-dark"
                style={{ backgroundColor: "#fa0087", position: "absolute" }}
              >
                <h3>Mese zilnice</h3>
              </span>
              <div className="dailyMeals">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></div>
                <div
                  class="badge"
                  style={{
                    position: "absolute",
                    right: "90px",
                    top: "80px",
                    width: "160px",
                    marginTop: "50px"
                  }}
                >
                  <h4>Total calorii: </h4>
                </div>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "275px"
                  }}
                >
                  <h5 style={{ paddingTop: "60px" }}>Mic dejun</h5>

                  <span>
                    <button
                      type="button"
                      class="btn btn-outline-success"
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        borderColor: "#32cd32",
                        marginRight: "10px"
                      }}
                    >
                      +
                    </button>
                  </span>
                </span>
                <hr />
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5 style={{ paddingTop: "60px" }}>Prânz</h5>

                  <span>
                    <button
                      type="button"
                      class="btn btn-outline-success"
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        borderColor: "#32cd32",
                        marginRight: "10px"
                      }}
                    >
                      +
                    </button>
                  </span>
                </span>
                <hr />
                <span
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5 style={{ paddingTop: "60px" }}>Cină</h5>

                  <span>
                    <button
                      type="button"
                      class="btn btn-outline-success"
                      style={{
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        borderColor: "#32cd32",
                        marginRight: "10px"
                      }}
                    >
                      +
                    </button>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="addRecipes">
                <span
                  class="badge badge-dark"
                  style={{ backgroundColor: "#32cd32" }}
                >
                  {" "}
                  <h3>Rețete</h3>
                </span>
                <div className="list-group">{listarecipes}</div>
              </div>
            </div>
          </div>
        </>
      );
    } else return null;
  }
}

export default ActivityMeals;
