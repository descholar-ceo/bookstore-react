import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import randomIdGenerator from '../helpers/randomId';

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);

const initialState = {
  books: [
    { bookId: randomIdGenerator(), bookTitle: 'Programming in Java', bookCategory: 'Programming' },
    { bookId: randomIdGenerator(), bookTitle: 'Programming in Ruby', bookCategory: 'Learning' },
  ],
};

const store = createStore(rootReducer, initialState, composeWithDevTools(middlewareEnhancer));

export default store;
