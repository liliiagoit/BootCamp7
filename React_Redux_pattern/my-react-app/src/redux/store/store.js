import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';


const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const history = createBrowserHistory();

const store = createStore (connectRouter(history)(rootReducer), 
compose(applyMiddleware(thunk), DevTools));

export default store;