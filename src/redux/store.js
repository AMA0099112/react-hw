import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const store = configureStore({
    // 處理state更新的函數
    reducer: {
        // cart 會由cartReducer管理
        cart: cartReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;