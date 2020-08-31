export const selectConversation = (item) => (dispatch) => {
  console.log(item);
  dispatch({
    type: "SELECT_CONVERSATION",
    payload: item,
  });
};
export const addMessage = (item) => (dispatch) => {
  console.log("New Message", item);
  dispatch({
    type: "ADD_MESSAGE",
    payload: item,
  });
};
export const switchDarkMode = () => (dispatch) => {
  console.log("Switching Theme");
  dispatch({
    type: "SWITCH_DARK_MODE",
  });
};
