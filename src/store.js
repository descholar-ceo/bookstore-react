import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const middlewareEnhanced = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(middlewareEnhanced));

export default store;
