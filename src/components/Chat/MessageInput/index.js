import React, { Component } from "react";
import s, { combineStyles } from "../../../constants/styles";
import { Card } from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import Send from "@material-ui/icons/Send";
import { Color_Theme } from "../../../constants/colors";
import { connect } from "react-redux";
import { addMessage } from "../../../actions";
import { image } from "faker";
import "./index.css";
class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      openGallery: false,
    };
  }
  handleInput = (e) => {
    this.setState({ message: e.target.value });
  };
  handleSend = (msg) => {
    console.log(this.state.message);

    this.props.addMessage({
      message: typeof msg != "object" ? msg : this.state.message,
      sender: this.props.user.name,
      timeStamp: Date.now(),
    });
    this.clearInput();
  };
  clearInput = () => {
    this.setState({ message: "" });
    document.getElementById("message").value = "";
  };
  componentDidUpdate(prevProps) {
    if (this.props.selected.name != prevProps.selected.name) {
      this.clearInput();
    }
  }
  getImages = () => {
    let images = [];
    for (var i = 0; i < Math.floor(Math.random() * 100); i++) {
      const im = image.avatar();
      images.push(
        <img
          onClick={() => {
            this.handleSend(im);
            this.setState({ openGallery: !this.state.openGallery });
          }}
          src={im}
          style={{ flex: 1, height: "10vh", minWidth: 100 }}
        />
      );
    }
    return images;
  };
  render() {
    const { openGallery } = this.state;
    return (
      <div
        id="input-upper-container"
        style={{
          height: openGallery ? "30vh" : null,

          overflowY: openGallery ? "scroll" : "hidden",
        }}
      >
        <div
          id="input-inner-container"
          style={{
            backgroundColor: this.props.Dark_Mode
              ? Color_Theme
              : "rgba(233, 242, 246,0.9)",
          }}
        >
          {/*<div
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

              s.m2,
            ])}
          >
            <InsertEmoticon
              
              style={combineStyles([
                {
                  color: this.props.Dark_Mode ? "grey" : "#ffffff",
                  fontSize: 30,
                },
              ])}
            />
          </div>*/}
          <Card
            id="input-card"
            style={combineStyles([
              s.b1,
              s.m2,
              s.p2,
              {
                backgroundColor: this.props.Dark_Mode
                  ? "rgba(59, 59, 61,0.4)"
                  : "#ffffff",
              },
            ])}
          >
            <textarea
              id="message"
              onChange={this.handleInput}
              style={{
                color: this.props.Dark_Mode
                  ? "rgb(211, 211, 211)"
                  : "rgb(80, 99, 107)",
              }}
              multiline={true}
            />
          </Card>

          <div
            onClick={() => {
              this.setState({ openGallery: !this.state.openGallery });
            }}
            className="icon-container"
            style={combineStyles([
              {
                backgroundColor: this.props.Dark_Mode
                  ? "transparent"
                  : "#61b7d5",
              },

              s.m2,
            ])}
          >
            <AttachFile
              style={combineStyles([
                {
                  color: this.props.Dark_Mode ? "grey" : "#ffffff",
                  fontSize: 30,
                },
              ])}
            />
          </div>
          <div
            className="icon-container"
            onClick={this.handleSend}
            style={combineStyles([
              {
                backgroundColor: this.props.Dark_Mode
                  ? "transparent"
                  : "#61b7d5",
              },

              s.m2,
            ])}
          >
            <Send
              style={combineStyles([
                {
                  color: this.props.Dark_Mode ? "grey" : "#ffffff",
                  fontSize: 30,
                },
              ])}
            />
          </div>
        </div>
        {openGallery && (
          <div
            id="gallery-container"
            style={{
              backgroundColor: this.props.Dark_Mode
                ? Color_Theme
                : "rgba(233, 242, 246,0.9)",
            }}
          >
            {this.getImages()}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.reducer.user,
    selected: store.reducer.selectedConversation,
    Dark_Mode: store.reducer.Dark_Mode,
  };
};

export default connect(mapStateToProps, { addMessage })(MessageInput);
