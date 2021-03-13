import React, { Component } from "react";

class Meals extends Component {
  render() {
    const { reteta } = this.props;
    const { denumire, poza } = reteta;

    return (
      <>
        <a
          href="http://localhost/dbrecipes/recipes/"
          class="list-group-item list-group-item-action"
        >
          <img alt=""
            src={"http://localhost/dbrecipes/" + poza }
            class="card-img"
            style={{ height: "auto", width: "80px" }}
          />
          <span style={{ paddingLeft: "10px" }}>{denumire}</span>
        </a>
      </>
    );
  }
}

export default Meals;
