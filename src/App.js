import React from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import Chat from "./components/Chat";
import s from "./constants/styles";
import faker from "faker";
import { Card } from "@material-ui/core";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        ...s.m0,
        scrollbarColor: "grey",
        scrollbarWidth: "thin",
        overflowY: "scroll",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        //overflowX: "hidden",
        //border: "solid black 1px",
      }}
    >
      <img
        src={require("./images/background.jfif")}
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Card
        elevation={12}
        style={{
          zIndex: 1,
          height: "75%",
          width: "75%",
          flexDirection: "row",
          display: "flex",
          backgroundColor: "transparent",
        }}
      >
        <ContactList
          list={[
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
            { name: faker.name.findName() },
          ]}
        />
        <Chat />
      </Card>
    </div>
  );
}

export default App;
