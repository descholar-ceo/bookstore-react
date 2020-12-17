import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const getRandomBookId = () => Math.floor((Math.random() * 1000) + 1);
const initialState = {
  books: [
    { bookId: getRandomBookId(), bookTitle: 'Programming in Java', bookCategory: 'Programming' },
    { bookId: getRandomBookId(), bookTitle: 'Poor dad and rich dad', bookCategory: 'Finance' },
    { bookId: getRandomBookId(), bookTitle: 'Rails and React', bookCategory: 'Programming' },
    { bookId: getRandomBookId(), bookTitle: 'Everything on Robotics', bookCategory: 'Science' },
    { bookId: getRandomBookId(), bookTitle: 'Big Data', bookCategory: 'Datascience' },
  ],
};
const middleware = [thunk];
const middlewareEnhanced = applyMiddleware(...middleware);

const store = createStore(rootReducer, initialState, composeWithDevTools(middlewareEnhanced));

export default store;
