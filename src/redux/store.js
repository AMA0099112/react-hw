import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import storage from 'redux-persist/lib/storage'; // 使用 localStorage
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'shoppingCart',
    storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        // cart 會由cartReducer管理
        cart: persistedCartReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',

    //  關掉網頁後，重新打開網頁，東西還會在
    // globalstate會需要他
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
                // 如果用 redux-persist，需要忽略這些 action
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),


});

//export store to global
export const persistor = persistStore(store);

