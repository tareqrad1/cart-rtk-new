import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const FindProduct = state.cart.find((ele) => ele.id === action.payload.id);
            if(FindProduct) {
                FindProduct.qwt += 1
            }else {
                const product = { ...action.payload , qwt: 1 }
                state.cart.push(product);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((ele) => ele.id !== action.payload.id)
        },
        decrementQuantity: (state, action) => {
            const FindProduct = state.cart.find((ele) => ele.id === action.payload.id)
            if(FindProduct) {
                if(FindProduct.qwt > 1) {
                    FindProduct.qwt -= 1
                }
            }
        },
        clearCart: (state, action) => {
            state.cart = []
        }
    }
})
export default cartSlice.reducer;
export const { addToCart, removeFromCart, decrementQuantity, clearCart } = cartSlice.actions;