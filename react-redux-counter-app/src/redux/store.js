// 스토어 정의 : 어플리케이션 전체에서 상태를 저장하고 있는 저장체
// 스토어 안에 리듀서가 있다
// 각 컴폰너트에서 특정 이벤트에 따라서 액션은 dispatch 해야 한다
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from  "./reducer";

const store = configureStore({
    reducer: rootReducer
});

export default store;