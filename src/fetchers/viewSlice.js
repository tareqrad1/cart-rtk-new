import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: [],
}
const viewSlice = createSlice({
    name:'view',
    initialState,
    reducers: {
        viewModal: (state, action) => {
            // state.view = action.payload
            state.view.push(action.payload)
        }
    }
})
export default viewSlice.reducer;
export const { viewModal, } = viewSlice.actions;