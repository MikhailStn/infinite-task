import { createStore, combineReducers } from 'redux';
import { userListReducer } from './userListReducer';

const rootReducer = combineReducers({ userListReducer });

export const store = createStore(rootReducer);
