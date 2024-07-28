import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 설정
const initialState = {
  items: [],
};

// 슬라이스 생성
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
        const {productId, quantity} = action.payload;
        state.items.push({productId, quantity});
    }
  }
});

// 액션 및 리듀서 내보내기
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;