import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionsTypes';

const initialState = {};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: action.payload };
    case REMOVE_BOOK:
      return { ...state, removedBook: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
