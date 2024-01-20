import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            products: [],
            quantity: 0,
            totalPrice: 0
        },
        reducers: {
            addProduct: (state, action) => {
                state.quantity += 1;
                state.products.push(action.payload);
                state.totalPrice += action.payload.price * action.payload.chooseAmount;
            }
        }
    }
)
export const {addProduct}=cartSlice.actions;
export default cartSlice.reducer;