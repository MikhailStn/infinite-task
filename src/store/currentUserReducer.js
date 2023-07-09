const defaultState = {
  index: "",
  id: "",
  age: 0,
  firstName: "",
  lastName: "",
  email: "",
};

export const currentUserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_USER":
      return action.payload;
    case "CHANGE_CURRENT_USER_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
      };
    case "CHANGE_CURRENT_USER_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };
    case "CHANGE_CURRENT_USER_AGE":
      return {
        ...state,
        age: action.payload,
      };
    case "CHANGE_CURRENT_USER_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
