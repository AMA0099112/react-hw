import { createSlice } from "@reduxjs/toolkit";
import { remove } from "lodash";

// 先定義初始狀態為cartItems空陣列
const initialState = { cartItems: [] };
const cartSlice = createSlice({
    name: 'cart',
    // 變數名稱跟變數內容相同時可以直接寫initialState 不用寫成initialState:initialState
    // 初始值
    initialState,
    // 處理state更新的函數
    reducers: {
        addCartItems: (state, action) => {
            const item = action.payload;
            //檢查ID是否相同 若相同 數量蓋過去 如果不相同則累加
            const book = state.cartItems.find((x) => x.ID === item.ID);
            if (!!book) {
                const cartItems = state.cartItems.map((x) =>
                    x.ID === book.ID ? item : x);
                state.cartItems = cartItems;
            }
            else {
                // 這個是原本的數量...state.cartItems，再去加上新的數量item
                state.cartItems = [...state.cartItems, item];
            }
        },
        removeCartItems: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.ID !== action.payload);
        }
    },

});

// export state to global
export const selectCartItems = (state) => state.cart.cartItems;

// export actions to global
export const { addCartItems, removeCartItems } = cartSlice.actions;

// export reducer to global
export default cartSlice.reducer;