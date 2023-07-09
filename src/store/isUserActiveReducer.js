const defaultState = {
  isUserActive: false,
  currentUser: "",
};

export const isUserActiveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SHOW_USER_INFO":
      return {
        isUserActive: true,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
