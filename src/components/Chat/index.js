import React, { Component } from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default class ChatList extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <MessageList />
        <MessageInput />
      </div>
    );
  }
}
