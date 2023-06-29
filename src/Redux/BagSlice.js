import { createSlice } from '@reduxjs/toolkit';

export const bagSlice = createSlice({
    name: 'Bag',
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            state.push(action.payload);
            return state;
        },
        removeFromBag: (state, action) => {
            let res = state.filter((item) => item.name !== action.payload.name);
            return res;
        },
    },
});

export const { addToBag, removeFromBag } = bagSlice.actions;
export default bagSlice.reducer;
