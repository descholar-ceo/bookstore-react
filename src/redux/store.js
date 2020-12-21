import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import randomIdGenerator from '../helpers/randomId';

const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);

const initialState = {
  books: [
    { bookId: randomIdGenerator(), bookTitle: 'The age of Robotics', bookCategory: 'Sci-Fi' },
    { bookId: randomIdGenerator(), bookTitle: 'Programming in Java', bookCategory: 'Learning' },
    { bookId: randomIdGenerator(), bookTitle: 'Benito Musolin', bookCategory: 'Biography' },
    { bookId: randomIdGenerator(), bookTitle: 'The Raise of a green dragon', bookCategory: 'History' },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, initialState, composeWithDevTools(middlewareEnhancer));

export default store;
