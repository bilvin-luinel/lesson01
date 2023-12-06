// pointReducer.js

import { UPDATE_POINT } from '../actions/types';

const initialState = {
  point: 0, // 초기 포인트 값 설정
};

function pointReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_POINT:
      return {
        ...state,
        point: action.payload,
      };
    default:
      return state;
  }
}

export default pointReducer;