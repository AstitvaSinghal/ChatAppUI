import React, { Component } from "react";
import Call from "@material-ui/icons/Call";
import styles, { combineStyles } from "../../../constants/styles";
import { Card } from "@material-ui/core";
import { connect } from "react-redux";
import faker from "faker";
import { Color_Theme } from "../../../constants/colors";

class Header extends Component {
  render() {
    return (
      <Card
        elevation={10}
        style={{
          height: "12%",
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          backgroundColor: this.props.Dark_Mode
            ? Color_Theme
            : "rgba(233, 242, 246,0.9)",
          borderRadius: 0,
          ...styles.bb1,
          borderColor: "grey",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "10%",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            style={{
              width: "7vh",
              height: "7vh",
              borderRadius: "90%",
              marginLeft: 10,
              marginRight: 10,
            }}
            src={this.props.image}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: "100%",
            marginLeft: 10,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: "2.5vh",
              fontWeight: "bold",
              color: this.props.Dark_Mode
                ? styles.text_color
                : "rgb(60, 80, 90)",
            }}
          >
            {this.props.name}
          </div>
          <div
            style={{
              fontSize: "2vh",
              color: this.props.Dark_Mode ? styles.text_color : "#61b7d5",
            }}
          >
            {this.props.isOnline
              ? "Online"
              : "Last seen at " + faker.date.past().toLocaleTimeString()}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <div
            style={combineStyles([
              {
                backgroundColor: this.props.Dark_Mode
                  ? "transparent"
                  : "#61b7d5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                padding: 5,
              },

              styles.m2,
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
