import { createSlice } from "@reduxjs/toolkit";

// 先定義初始狀態為cartItems空陣列
const initialState = { cartItems: [] };
const cartSlice = createSlice({
    name: 'cart',
    // 變數名稱跟變數內容相同時可以直接寫initialState 不用寫成initialState:initialState
    // 初始值
    initialState,
    // 處理state更新的函數
    reducers: {
        addCartItems: () => { },
    },

});

// export state to global
export const selectCartItems = (state) => state.cart.cartItems;

// export actions to global
export const { addCartItems } = cartSlice.actions;

// export reducer to global
export default cartSlice.reducer;