import React, { Component } from "react";
import { MDBNavItem, MDBNavLink } from "mdbreact";
import {
  FaHome,
  FaDrumstickBite,
  FaPizzaSlice,
  FaUtensils
} from "react-icons/fa";

class Nav extends Component {
  render() {
    return (
      <>
        <div
          class="nav flex-column nav-pills bg-dark"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            class="nav-link"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <MDBNavItem>
              <MDBNavLink to="/home">
                <h5>
                  <FaHome></FaHome>
                  <span style={{ paddingLeft: "20px" }}>Home</span>
                </h5>
              </MDBNavLink>
            </MDBNavItem>
          </a>
          <a
            class="nav-link"
            id="v-pills-recipes-tab"
            data-toggle="pill"
            href="recipes"
            role="tab"
            aria-controls="v-pills-recipes"
            aria-selected="false"
            style={{ color: "white" }}
          >
            <MDBNavLink to="/recipes">
              <h5>
                <FaPizzaSlice></FaPizzaSlice>
                <span style={{ paddingLeft: "20px" }}>Rețete</span>
              </h5>
            </MDBNavLink>
          </a>
          <a
            class="nav-link"
            id="v-pills-masa-tab"
            data-toggle="pill"
            href="masa"
            role="tab"
            aria-controls="v-pills-masa"
            aria-selected="false"
            style={{ color: "white" }}
          >
            <MDBNavLink to="/masa">
              <h5>
                <FaUtensils></FaUtensils>
                <span style={{ paddingLeft: "20px" }}>Mese zilnice</span>
              </h5>
            </MDBNavLink>
          </a>
          <a
            class="nav-link"
            id="v-pills-adaugaReteta-tab"
            data-toggle="pill"
            href="adauga"
            role="tab"
            aria-controls="v-pills-adaugaReteta"
            aria-selected="false"
            style={{ color: "white" }}
          >
            <MDBNavLink to="/adauga-reteta">
              <h5>
                <FaDrumstickBite></FaDrumstickBite>
                <span style={{ paddingLeft: "20px" }}>Adaugă rețetă</span>
              </h5>
            </MDBNavLink>
          </a>
        </div>
      </>
    );
  }
}

export default Nav;
