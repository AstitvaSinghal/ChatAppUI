import React, { Component } from "react";
import Call from "@material-ui/icons/Call";
import styles, { combineStyles } from "../../../constants/styles";
import { Card } from "@material-ui/core";
import { connect } from "react-redux";
import faker from "faker";
import { Color_Theme } from "../../../constants/colors";
import "./index.css";
class Header extends Component {
  render() {
    return (
      <Card
        id="Header-card"
        elevation={10}
        style={{
          backgroundColor: this.props.Dark_Mode
            ? Color_Theme
            : "rgba(233, 242, 246,0.9)",
          ...styles.bb1,
        }}
      >
        <div id="image-container">
          <img id="contact-image" src={this.props.image} />
        </div>
        <div id="text-upper-container">
          <div
            id="name-holder"
            style={{
              color: this.props.Dark_Mode
                ? styles.text_color
                : "rgb(60, 80, 90)",
            }}
          >
            {this.props.name}
          </div>
          <div
            id="status"
            style={{
              color: this.props.Dark_Mode ? styles.text_color : "#61b7d5",
            }}
          >
            {this.props.isOnline
              ? "Online"
              : "Last seen at " + faker.date.past().toLocaleTimeString()}
          </div>
        </div>

        <div
          id="image-holder"
          style={combineStyles([
            {
              backgroundColor: this.props.Dark_Mode ? "transparent" : "#61b7d5",
            },
          ])}
        >
          <Call
            style={combineStyles([
              {
                color: this.props.Dark_Mode ? "grey" : "#ffffff",
                fontSize: 25,
              },
            ])}
          />
        </div>
      </Card>
    );
  }
}

const mapStateToProps = (store) => {
  console.log("store", store);
  return {
    name: store.reducer.selectedConversation.name,
    isOnline: store.reducer.selectedConversation.isOnline,
    image: store.reducer.selectedConversation.image,
    Dark_Mode: store.reducer.Dark_Mode,
  };
};

export default connect(mapStateToProps, {})(Header);
