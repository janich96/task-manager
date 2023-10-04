import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { loadState } from '../localStorage';

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState);