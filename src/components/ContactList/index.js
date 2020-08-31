import React, { Component } from "react";
import { Card } from "@material-ui/core";
import s, { combineStyles } from "../../constants/styles";
import WbSunny from "@material-ui/icons/WbSunny";
import NightsStay from "@material-ui/icons/NightsStay";
import { connect } from "react-redux";
import { selectConversation, switchDarkMode } from "../../actions";

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
        elevation={10}
        style={{
          width: "25%",
          height: "100%",
          overflow: "scroll",
          scrollbarColor: this.props.Dark_Mode
            ? "rgb(80, 99, 107)"
            : "rgba(84, 177, 210,0.8)",
          scrollbarWidth: "thin",
          backgroundColor: this.props.Dark_Mode
            ? "rgba(10, 15, 15,0.8)"
            : "rgba(84, 177, 210,0.8)",
          overflowX: "hidden",
          ...s.scrollBar,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: "solid  0.1px",
            borderColor: this.props.Dark_Mode ? "grey" : "#ffffff",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "7vh",
                height: "7vh",
                maxHeight: 50,
                maxWidth: 50,
                borderRadius: "50%",
                margin: 10,
              }}
              src={this.props.user.image}
            />
            <div
              style={{
                flex: 1,
                justifyContent: "flex-end",
                display: "flex",
                marginRight: 10,
              }}
            >
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
            style={combineStyles([
              s.b1,
              s.m2,
              s.p2,
              {
                height: "2vh",
                borderRadius: 10,
                width: "80%",
                backgroundColor: this.props.Dark_Mode
                  ? "rgba(59, 59, 61,0.4)"
                  : "#ffffff",
                borderColor: this.props.Dark_Mode
                  ? "grey"
                  : "rgb(84, 177, 210)",
                display: "flex",
                alignItems: "centers",
              },
            ])}
          >
            <input
              id="input"
              onChange={this.handleInput}
              style={{
                height: "2vh",
                width: "100%",
                color: this.props.Dark_Mode
                  ? "rgb(211, 211, 211)"
                  : "rgb(80, 99, 107)",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "2.5vh",
                outline: "none",
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
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottom: "solid  0.1px",
                  borderColor: this.props.Dark_Mode ? "grey" : "#ffffff",
                }}
                onClick={() => {
                  this.selectConversation(item);
                }}
              >
                <img
                  style={{
                    width: "75%",
                    height: "75%",
                    maxHeight: 75,
                    maxWidth: 75,
                    borderRadius: "50%",
                    margin: 10,
                  }}
                  src={item.image}
                />
                <div
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    padding: 10,
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
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
                    style={{
                      flex: 1,
                      color: s.text_color,
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontSize: "2vh",
                    }}
                  >
                    {item.lastMessage}
                  </div>
                </div>
                {item.unreadMessages.length > 0 && (
                  <div
                    style={{
                      alignSelf: "flex-end",
                      margin: 10,
                      marginLeft: "auto",
                      color: "white",
                      backgroundColor: this.props.Dark_Mode
                        ? "rgb(65, 65, 65)"
                        : "rgba(84, 177, 210)",
                      padding: 5,
                      borderRadius: 1000,
                      height: 20,
                      width: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
