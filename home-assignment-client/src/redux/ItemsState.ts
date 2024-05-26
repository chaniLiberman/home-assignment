import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    imageArray:null,
    loading:false,
}

const itemState = createSlice({
    name: "itemState",
    initialState,
    reducers: {
        initImages(state, action) {
            state.imageArray = action.payload;
        },

        setLoading(state, action) {
            state.loading = action.payload;
        },
    }
})

export const { initImages, setLoading } = itemState.actions;
export default itemState.reducer;

