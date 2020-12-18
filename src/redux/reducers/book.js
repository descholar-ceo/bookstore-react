import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionsTypes';

const initialState = {
  books: [
    { bookId: Math.floor((Math.random() * 100)), bookTitle: 'Programming in Java', bookCategory: 'Programming' },
    { bookId: Math.floor((Math.random() * 100)), bookTitle: 'Poor dad and rich dad', bookCategory: 'Finance' },
    { bookId: Math.floor((Math.random() * 100)), bookTitle: 'Rails and React', bookCategory: 'Programming' },
    { bookId: Math.floor((Math.random() * 100)), bookTitle: 'Everything on Robotics', bookCategory: 'Science' },
    { bookId: Math.floor((Math.random() * 100)), bookTitle: 'Big Data', bookCategory: 'Datascience' },
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
