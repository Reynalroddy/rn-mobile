import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
  },
  (builder) => {
    builder
      .addCase("addToCart", (state, action) => {
        const item = action.payload;
        const isExist = state.cartItems.find((it) => item.product === it.product);
        // const existItem = state.cartItem.find((prod) => it.id === prod.id);
        // console.log(item.product);
        if (isExist) {
            // console.log('yes');
          state.cartItems = state.cartItems.filter((i) =>
            i.product === isExist.product ? item : i
          );
    
          for (let i = 0; i < state.cartItems.length; i++) {
            if (state.cartItems[i].product === isExist.product)
              state.cartItems[i] = item;
          }
        } else  state.cartItems.push(item);
         
      })  
      .addCase("removeFromCart", (state, action) => {
        const id = action.payload;
        state.cartItems = state.cartItems.filter((i) => i.product !== id);
      })
      .addCase("clearCart", (state) => {
        state.cartItems = [];
      });
  }
);