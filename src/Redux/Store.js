import { configureStore, combineReducers } from '@reduxjs/toolkit';
import wishlistReducer from './WishlistSlice';
import bagReducer from './BagSlice';

const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    bag: bagReducer,
});

export const store = configureStore({
    reducer: {
        root: rootReducer,
    },
});
