import React, { Component } from "react";
import DairyFree from "./assets/images/dairy-free-lunches.png";
import DairyFreeLunch from "./assets/images/dairy-free.jpg";
import { MDBNavLink } from "mdbreact";
import Logo from "./assets/images/logo_salad.png";

class Home extends Component {
  render() {
    return (
      <>
        <div class="navbar-logo">
          <img src={Logo} alt="" class="rounded float-left"></img>
        </div>
        <div class="navbar-text1">DAIRY-FREE</div>
        <div class="navbar-text2">MEALS</div>

        <div className="row">
          <div className="col-md-6">
            <h2
              style={{
                marginTop: "200px",
                color: "#32cd32",
                fontSize: "100px",
                fontWeight: "800"
              }}
            >
              A week of
            </h2>
            <h6
              style={{
                color: "#f6ae2d",
                fontSize: "50px",
                fontWeight: "400",
                marginLeft: "50px"
              }}
            >
              dairy-free meals
            </h6>
            <div class="text-center">
              <img src={DairyFreeLunch}alt="" class="dairyFreeLunch" />
              <MDBNavLink
                to="/masa"
                class="btn btn-success"
                style={{ paddingTop: "25px" }}
              >
                Calculează masa zilnică
              </MDBNavLink>
            </div>
          </div>
          <div className="col-md-4">
            <img src={DairyFree} alt="" class="dairyFree" />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
