import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            products: [],
            quantity: 0,
            totalPrice: 0,
        },
        reducers: {
            addProduct: (state, action) => {
                state.quantity += 1;
                state.products.push(action.payload);
                state.totalPrice += action.payload.price * action.payload.chooseAmount;
            },
            removeProduct: (state, action) => {
                state.quantity -= 1;
                console.log(state.products.filter((item) => item._id !== `${action.payload}`))

                // for(let i =0 ; i<state.products.length;i++){
                //     for(let x in state.products){
                //          if(x._id === action.payload){
                //             state.products.splice(i)
                //             break;
                //          }
                //     }
                // } 
            },
            resetCart: (state) => {
                state.products = [];
                state.quantity = 0;
                state.totalPrice = 0;
            }
        }
    }
)
export const { addProduct, resetCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
