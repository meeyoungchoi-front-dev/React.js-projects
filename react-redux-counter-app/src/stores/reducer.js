import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from './actionType';

const initialState = {
  count: 0,
};

const counterReducer = handleActions(
  {
    [INCREMENT]: (state) => ({ count: state.count + 1 }),
    [DECREMENT]: (state) => ({ count: state.count - 1 }),
  },
  initialState
);

export default counterReducer;