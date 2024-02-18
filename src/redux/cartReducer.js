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
                if (state.quantity > 0) {
                    state.quantity -= 1;
                    const productInParse = JSON.parse(JSON.stringify(state.products));
                    state.products = productInParse.filter((item) => item._id !== action.payload);
                }
            },
            updateProducts: (state, action) => {
                const productInParse = JSON.parse(JSON.stringify(state.products));

                for (let i = 0; i <= productInParse.length; i++) {
                    // console.log(productInParse[i])
                    if (productInParse[i]?._id === action.payload.item?._id) {
                        productInParse[i].chooseAmount = action.payload.updatedValue;
                        // console.log("it is equal")
                    }
                }
                state.products = productInParse;

                // console.log(action.payload.item)
            },
            resetCart: (state) => {
                state.products = [];
                state.quantity = 0;
                state.totalPrice = 0;
            }
        }
    }
)
export const { addProduct, resetCart, removeProduct, updateProducts } = cartSlice.actions;
export default cartSlice.reducer;
