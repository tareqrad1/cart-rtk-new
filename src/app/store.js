import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../fetchers/cartSlice";
import viewModal  from "../fetchers/viewSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        view: viewModal,
    }
})
export default store