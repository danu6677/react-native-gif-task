import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import giffsReducer from '../reducers/reducer';

//Store Configuration
const rootReducer = combineReducers({giffsReducer});
export const Store = createStore(rootReducer, applyMiddleware(thunk));
