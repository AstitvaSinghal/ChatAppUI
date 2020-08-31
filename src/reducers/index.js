import faker from "faker";
import { combineReducers } from "redux";
const user = { image: faker.image.avatar(), name: faker.name.findName() };
const createChat = (contact) => {
  let messages = [];
  for (var i = 0; i < Math.floor(Math.random() * 100); i++) {
    messages.push({
      message: faker.lorem.words(),
      sender: Math.floor(Math.random() * 2) ? contact : user.name,
      timeStamp: Date.parse(faker.date.past()),
    });
  }
  return messages;
};
const createContacts = () => {
  let contacts = [];
  for (var i = 0; i < Math.floor(Math.random() * 100); i++) {
    const name = faker.name.findName();
    const messages = createChat(name);
    contacts.push({
      name,
      image: faker.image.avatar(),
      lastMessage: faker.lorem.words(),
      messages,
      unreadMessages: messages.slice(
        Math.floor(Math.random() * messages.length)
      ),
      isOnline: Math.floor(Math.random() * 2),
    });
  }
  console.log("contacts", contacts);
  return contacts;
};

let contacts = createContacts();
contacts[0].unreadMessages = [];
const initialState = {
  contacts,
  selectedConversation: contacts[0],
  user,
  Dark_Mode: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_CONVERSATION":
      return {
        ...state,
        selectedConversation: action.payload,
        contacts: state.contacts.map((item) => {
          if (action.payload.name == item.name) {
            return {
              ...item,
              unreadMessages: [],
            };
          } else if (state.selectedConversation.name == item.name) {
            return { ...state.selectedConversation, unreadMessages: [] };
          } else {
            return item;
          }
        }),
      };
      break;
    case "ADD_MESSAGE":
      return {
        ...state,
        selectedConversation: {
          ...state.selectedConversation,
          messages: [...state.selectedConversation.messages, action.payload],
        },
      };
      break;
    case "SWITCH_DARK_MODE":
      return {
        ...state,
        Dark_Mode: !state.Dark_Mode,
      };
      break;
    default:
      return state;
  }
}

export default combineReducers({ reducer });
