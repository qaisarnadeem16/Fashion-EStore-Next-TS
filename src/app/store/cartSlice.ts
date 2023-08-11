import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  // Add other properties as needed
}

interface CartState extends Array<CartItem> {}

const initialState: CartState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },

    remove(state, action: PayloadAction<number>) {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
