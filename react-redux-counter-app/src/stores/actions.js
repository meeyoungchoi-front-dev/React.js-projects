// src/stores/actions.js

import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT } from './actionType';

// createAction을 사용하여 액션 생성 함수 정의
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);