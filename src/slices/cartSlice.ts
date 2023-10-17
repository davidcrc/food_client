import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/stores/store';

export interface Item {
  id: string;
  name: string;
  price: number;
  image: any;
  description: string;
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const newCart = [...state.items];
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log('cant remove the item that is not added to cart!');
      }

      state.items = newCart;
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsById = (state: RootState, id: string) => state.cart.items.filter((item) => item.id === id);

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => (total = total += item.price), 0);

export default cartSlice.reducer;
