import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}
