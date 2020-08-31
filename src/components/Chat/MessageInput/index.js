import React, { Component } from "react";
import s, { combineStyles } from "../../../constants/styles";
import { Card } from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import Send from "@material-ui/icons/Send";
import { Color_Theme } from "../../../constants/colors";
import { connect } from "react-redux";
import { addMessage } from "../../../actions";
import { image } from "faker";
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
    //send message
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
        style={{
          height: openGallery ? "30vh" : null,
          width: "100%",
          overflowY: openGallery ? "scroll" : "hidden",

          scrollbarColor: "grey",
          scrollbarWidth: "thin",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: this.props.Dark_Mode
              ? Color_Theme
              : "rgba(233, 242, 246,0.9)",
            display: "flex",
            alignItems: "center",
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
              //fontSize="large"
              style={combineStyles([
                {
                  color: this.props.Dark_Mode ? "grey" : "#ffffff",
                  fontSize: 30,
                },
              ])}
            />
          </div>*/}
          <Card
            style={combineStyles([
              s.b1,
              s.m2,
              s.p2,
              {
                borderRadius: 10,
                width: "80%",
                flex: 1,
                backgroundColor: this.props.Dark_Mode
                  ? "rgba(59, 59, 61,0.4)"
                  : "#ffffff",
                borderColor: "grey",
              },
            ])}
          >
            <textarea
              id="message"
              onChange={this.handleInput}
              style={{
                height: "3vh",
                width: "100%",
                color: this.props.Dark_Mode
                  ? "rgb(211, 211, 211)"
                  : "rgb(80, 99, 107)",
                backgroundColor: "transparent",
                border: "solid black 0px",
                outline: "none",
                fontSize: "2.5vh",
              }}
              multiline={true}
            />
          </Card>

          <div
            onClick={() => {
              this.setState({ openGallery: !this.state.openGallery });
            }}
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
            onClick={this.handleSend}
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
            id="messageList"
            style={{
              height: "100%",
              flex: 1,
              justifyContent: "center",
              backgroundColor: this.props.Dark_Mode
                ? Color_Theme
                : "rgba(233, 242, 246,0.9)",
              width: "100%",
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
