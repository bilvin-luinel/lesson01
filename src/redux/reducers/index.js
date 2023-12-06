import { combineReducers } from 'redux';
import pointReducer from './pointReducer'

const rootReducer = combineReducers({
  // 다른 리듀서들이 있다면 추가할 수 있습니다.
  point: pointReducer,
});

export default rootReducer;