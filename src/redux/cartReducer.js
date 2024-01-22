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
            },
            resetCart:(state)=>{
                state.products=[];
                state.quantity=0;
                state.totalPrice=0;
            }
        }
    }
)
export const {addProduct,resetCart}=cartSlice.actions;
export default cartSlice.reducer;
