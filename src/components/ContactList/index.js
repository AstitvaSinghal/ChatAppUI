import React, { Component } from "react";
import { Card } from "@material-ui/core";
import s, { combineStyles } from "../../constants/styles";
import WbSunny from "@material-ui/icons/WbSunny";
import NightsStay from "@material-ui/icons/NightsStay";
import { connect } from "react-redux";
import { selectConversation, switchDarkMode } from "../../actions";
import "./index.css";
class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  selectConversation = (conversation) => {
    this.props.selectConversation(conversation);
  };
  handleInput = (e) => {
    this.setState({ search: e.target.value });
  };
  matchesSearch = (item) => {
    const { search } = this.state;
    if (search == "") return true;
    const reg = new RegExp("(" + search.toLowerCase() + ")+");
    return reg.test(item.name.toLowerCase()) ? true : false;
  };
  render() {
    return (
      <Card
        id="upper-container"
        elevation={10}
        style={{
          scrollbarColor: this.props.Dark_Mode
            ? "rgb(80, 99, 107)"
            : "rgba(84, 177, 210,0.8)",

          backgroundColor: this.props.Dark_Mode
            ? "rgba(10, 15, 15,0.8)"
            : "rgba(84, 177, 210,0.8)",

          ...s.scrollBar,
        }}
      >
        <div
          id="header-container"
          style={{
            borderColor: this.props.Dark_Mode ? "grey" : "#ffffff",
          }}
        >
          <div id="upper-box">
            <img id="image" src={this.props.user.image} />
            <div id="icon-container">
              <div onClick={this.props.switchDarkMode}>
                {!this.props.Dark_Mode ? (
                  <WbSunny
                    style={{
                      color: this.props.Dark_Mode ? "grey" : "white",
                      fontSize: 30,
                    }}
                  />
                ) : (
                  <NightsStay
                    style={{
                      color: this.props.Dark_Mode ? "grey" : "white",
                      fontSize: 30,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <Card
            id="search-container"
            style={combineStyles([
              s.b1,
              s.m2,
              s.p2,
              {
                backgroundColor: this.props.Dark_Mode
                  ? "rgba(59, 59, 61,0.4)"
                  : "#ffffff",
                borderColor: this.props.Dark_Mode
                  ? "grey"
                  : "rgb(84, 177, 210)",
              },
            ])}
          >
            <input
              id="search-input"
              onChange={this.handleInput}
              style={{
                color: this.props.Dark_Mode
                  ? "rgb(211, 211, 211)"
                  : "rgb(80, 99, 107)",
              }}
              multiline={true}
            />
          </Card>
        </div>
        {this.props.list &&
          this.props.list.map((item) => {
            if (!this.matchesSearch(item)) return null;
            return (
              <div
                id="contact-container"
                style={{
                  borderColor: this.props.Dark_Mode ? "grey" : "#ffffff",
                }}
                onClick={() => {
                  this.selectConversation(item);
                }}
              >
                <img id="contact-image" style={{}} src={item.image} />
                <div id="text-upper-container">
                  <div
                    id="contact-name"
                    style={{
                      flex: 1,
                      color: "rgb(230, 230, 230)",
                      fontSize: "2.2vh",
                      marginBottom: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    id="last-message"
                    style={{
                      color: this.props.Dark_Mode
                        ? s.text_color
                        : "rgb(60, 80, 90)",
                    }}
                  >
                    {item.lastMessage}
                  </div>
                </div>
                {item.unreadMessages.length > 0 && (
                  <div
                    id="unread-message"
                    style={{
                      backgroundColor: this.props.Dark_Mode
                        ? "rgb(65, 65, 65)"
                        : "rgba(84, 177, 210)",
                    }}
                  >
                    {item.unreadMessages.length}
                  </div>
                )}
              </div>
            );
          })}
      </Card>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    list: store.reducer.contacts,
    Dark_Mode: store.reducer.Dark_Mode,
    user: store.reducer.user,
  };
};

export default connect(mapStateToProps, { selectConversation, switchDarkMode })(
  ContactList
);
