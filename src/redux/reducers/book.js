import randomIdGenerator from '../../helpers/randomId';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionsTypes';

const initialState = {
  books: [
    { bookId: randomIdGenerator(), bookTitle: 'Programming in Java', bookCategory: 'Programming' },
    { bookId: randomIdGenerator(), bookTitle: 'Poor dad and rich dad', bookCategory: 'Finance' },
    { bookId: randomIdGenerator(), bookTitle: 'Rails and React', bookCategory: 'Programming' },
    { bookId: randomIdGenerator(), bookTitle: 'Everything on Robotics', bookCategory: 'Science' },
    { bookId: randomIdGenerator(), bookTitle: 'Big Data', bookCategory: 'Datascience' },
  ],
};

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
