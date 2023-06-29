import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
    name: 'Wishlist',
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload);
            return state;
        },

        removeFromWishlist: (state, action) => {
            let res = state.filter((item) => item.name !== action.payload.name);
            return res;
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
