import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "data",
    initialState: {
        Categorys: [],
        Carousels: []
    },
    reducers: {
        CategorySuccess: (state, actions) => {
            state.Categorys = actions.payload;
        }
    }
});
export const {
    CategorySuccess
} = DataSlice.actions;

export default DataSlice;