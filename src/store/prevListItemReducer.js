const defaultState = {
  prevEl: "",
};

export const prevListItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "REMOVE_CLASS":
      return {
        prevEl: action.payload,
      };
    default:
      return state;
  }
};
