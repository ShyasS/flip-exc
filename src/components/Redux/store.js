import {createStore,applyMiddleware,compose} from 'redux';
import reducer from '../Redux/reducer/index';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store;