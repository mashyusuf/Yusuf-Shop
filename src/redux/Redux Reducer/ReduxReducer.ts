import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../../type";

interface InitialState {
    cart: ProductType[];
    favorite: ProductType[];
    userInfo: any;
}

const initialState: InitialState = {
    cart: [],
    favorite: [],
    userInfo: null,
};

export const shofySlice = createSlice({
    name: "yusufShop",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductType>) => {
            const existingProduct = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if (existingProduct) {
                if (existingProduct.quantity) {
                    existingProduct.quantity += 1;
                }
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseQuantity: (state, action: PayloadAction<string>) => {
            const existingProduct = state.cart.find(
                (item) => item.id === action.payload
            );
            if (existingProduct && existingProduct.quantity) {
                existingProduct.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const existingProduct = state.cart.find(
                (item) => item.id === action.payload
            );
            if (existingProduct && existingProduct.quantity) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    // Remove the product if quantity reaches 0
                    state.cart = state.cart.filter(
                        (item) => item.id !== action.payload
                    );
                }
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        resetCart: (state) => {
            state.cart = [];
        },
        addToFavorite: (state, action: PayloadAction<ProductType>) => {
            const existingProduct = state.favorite.find(
                (item) => item.id === action.payload.id
            );
            if (existingProduct) {
                state.favorite = state.favorite.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                state.favorite.push(action.payload);
            }
        },
        resetFavorite: (state) => {
            state.favorite = [];
        },
        addUser: (state, action: PayloadAction<any>) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    },
});

export const {
    addToCart,
    addUser,
    removeUser,
    addToFavorite,
    resetFavorite,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    resetCart,
} = shofySlice.actions;

export default shofySlice.reducer;
