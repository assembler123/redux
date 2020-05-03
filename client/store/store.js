import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ageReducer from '../Reducers/Age';
import todoReducer from '../Reducers/Task';
const store = createStore(combineReducers({ todoReducer: todoReducer, ageReducer: ageReducer }), composeWithDevTools());
export default store;