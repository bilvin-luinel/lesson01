// configureStore.js

import { combineReducers, createStore } from 'redux';
import rootReducer from '../reducers'; // rootReducer 경로에 따라 수정 필요
import pointReducer from '../reducers/pointReducer';

const rootReducer = combineReducers({
    point: pointReducer
})

const store = createStore(rootReducer);

export default store;