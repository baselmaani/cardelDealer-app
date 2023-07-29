import { TYPES } from './types';

export const initialState = {
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
