const defaultState = {
  className: 'user-list__item',
};

export const userListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'REMOVE_CLASS':
      return {
        className: 'user-list__item',
      };
  }
  return state;
};
