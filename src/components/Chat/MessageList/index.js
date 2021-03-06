import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { Color_Theme } from "../../../constants/colors";
import "./index.css";
class MessageList extends Component {
  updateScroll = () => {
    var element = document.getElementById("messageList");
    element.scrollTop = element.scrollHeight;
  };
  componentDidMount() {
    this.updateScroll();
  }
  componentDidUpdate() {
    this.updateScroll();
  }
  isImage = (msg) => {
    console.log("msg", msg);
    if (msg.length < 3) return false;
    if (msg.slice(msg.length - 3) == "jpg") return true;
    else return false;
  };
  render() {
    return (
      <div
        id="messageList"
        style={{
          backgroundColor: this.props.Dark_Mode
            ? Color_Theme
            : "rgba(233, 242, 246,0.9)",
        }}
      >
        {this.props.messages.map((item) => {
          return (
            <div id="message-container">
              <Paper
                elevation={1}
                id="message-paper"
                style={{
                  alignSelf:
                    item.sender == this.props.user.name
                      ? "flex-end"
                      : "flex-start",
                  borderTopLeftRadius:
                    item.sender == this.props.user.name ? 10 : 0,
                  borderTopRightRadius:
                    item.sender == this.props.user.name ? 0 : 10,
                  color:
                    item.sender != this.props.user.name
                      ? this.props.Dark_Mode
                        ? "rgb(230, 230, 230)"
                        : "rgb(120, 140, 160)"
                      : this.props.Dark_Mode
                      ? "rgb(144, 144, 146)"
                      : "#ffffff",
                  backgroundColor:
                    item.sender != this.props.user.name
                      ? this.props.Dark_Mode
                        ? "rgb(65, 65, 65,0.6)"
                        : "#ffffff"
                      : this.props.Dark_Mode
                      ? "rgba(34, 34, 34,0.6)"
                      : "rgb(97, 183, 213)",
                }}
              >
                {this.isImage(item.message) ? (
                  <img
                    src={item.message}
                    style={{ height: "20vh", width: "20vw" }}
                  />
                ) : (
                  item.message
                )}
              </Paper>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log("messages", store.reducer.selectedConversation);
  return {
    user: store.reducer.user,
    messages: store.reducer.selectedConversation.messages,

    Dark_Mode: store.reducer.Dark_Mode,
  };
};
export default connect(mapStateToProps, {})(MessageList);
