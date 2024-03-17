import { createStore, combineReducers } from 'redux';
import navigationReducer from './reducers/navigationReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

const store = createStore(rootReducer);

export default store;
