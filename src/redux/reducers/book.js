import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionsTypes';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          bookId: action.book.bookId,
          bookTitle: action.book.bookTitle,
          bookCategory: action.book.bookCategory,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.bookId !== action.book.bookId);
    default:
      return state;
  }
};

export default bookReducer;
