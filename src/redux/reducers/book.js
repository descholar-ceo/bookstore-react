import randomIdGenerator from '../../helpers/randomId';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionsTypes';

const initialState = {
  books: { bookId: randomIdGenerator(), bookTitle: 'Programming in Java', bookCategory: 'Programming' },
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, books: action.book };
    case REMOVE_BOOK:
      return { ...state, removedBook: action.book };
    default:
      return state;
  }
};

export default bookReducer;
