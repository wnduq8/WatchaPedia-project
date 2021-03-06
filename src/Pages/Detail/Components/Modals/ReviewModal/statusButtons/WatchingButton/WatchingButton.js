import React, { Component } from "react";
import "./WatchingButton.scss";

class WatchingButton extends Component {
  render() {
    const { status, changeStatus, openModal, src } = this.props;
    return (
      <div
        className="WatchingButton"
        onClick={() => {
          changeStatus(status === "watching" ? "none" : "watching");
          openModal("none");
        }}
      >
        <img alt="watching" src={src} />
        <span>보는중</span>
      </div>
    );
  }
}

export default WatchingButton;
