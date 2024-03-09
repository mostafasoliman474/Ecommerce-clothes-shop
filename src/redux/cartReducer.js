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
                if (state.products.length > 0) {
                    const productInParse = JSON.parse(JSON.stringify(state.products));
                    let listOfProduct = productInParse.filter((item) => item._id === action.payload._id);
                    const dublicate = listOfProduct.filter((item) =>
                        item._id === action.payload._id && item.chooseSize === action.payload.chooseSize && item.chooseColor === action.payload.chooseColor
                    )
                    if (dublicate.length > 0) {

                        const additionChooseAmount = parseInt(action.payload.chooseAmount);
                        const dublicateChooseAmount = parseInt(dublicate[0].chooseAmount)
                        dublicate[0].chooseAmount = dublicateChooseAmount + additionChooseAmount
                        const productsWithNoProductUpdated = productInParse.filter((item) => item._id !== action.payload._id);
                        productsWithNoProductUpdated.push(dublicate[0])
                        state.products = productsWithNoProductUpdated
                    }
                    else {
                        state.quantity += 1;
                        state.products.push(action.payload);
                        state.totalPrice += action.payload.price * action.payload.chooseAmount;
                    }
                }
                else {
                    state.quantity += 1;
                    state.products.push(action.payload);
                    state.totalPrice += action.payload.price * action.payload.chooseAmount;
                }
            },
            removeProduct: (state, action) => {
                if (state.quantity > 0) {
                    state.quantity -= 1;
                    const productInParse = JSON.parse(JSON.stringify(state.products));
                    // console.log(
                    //     "id"+ action.payload._id+"\n"+
                    //     "chooseSize"+ action.payload.chooseSize+"\n"+
                    //     "chooseColor"+ action.payload.chooseColor+"\n"
                    // )
                    state.products = productInParse.filter((item) =>
                        item._id !== action.payload._id && item.chooseSize !== action.payload.chooseSize && item.chooseColor !== action.payload.chooseColor
                    )
                        ;
                    state.totalPrice -= action.payload.price * action.payload.chooseAmount;
                }
            },
            updateProducts: (state, action) => {
                const productInParse = JSON.parse(JSON.stringify(state.products));
                for (let i = 0; i <= productInParse.length; i++) {
                    if (action.payload.updatedValue > 0 && action.payload.updatedValue) {
                        if (productInParse[i]?._id === action.payload.item?._id) {
                            if (productInParse[i].chooseAmount > action.payload.updatedValue) {
                                state.totalPrice -= (productInParse[i].chooseAmount * productInParse[i].price) - ((action.payload.item.chooseAmount - 1) * action.payload.item.price);
                                productInParse[i].chooseAmount = action.payload.updatedValue;
                            }
                            else if (productInParse[i].chooseAmount < action.payload.updatedValue) {
                                state.totalPrice += ((action.payload.item.chooseAmount) * action.payload.item.price) - ((productInParse[i].chooseAmount - 1) * productInParse[i].price);
                                productInParse[i].chooseAmount = action.payload.updatedValue;
                            }
                        }
                    }
                    else {
                        state.totalPrice = 0
                    }
                }
                state.products = productInParse;
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
