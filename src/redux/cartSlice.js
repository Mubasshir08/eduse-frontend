// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    selectedItems: [],
    checkoutData: {
      subtotal: 0,
      intotal: 0,
      selectedItemsData: []
    }
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.selectedItems = state.selectedItems.filter((id) => id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    setSelectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },
    setCheckoutData: (state, action) => {
      state.checkoutData = action.payload;
    },
    setIntotal: (state, action) => {
      state.checkoutData.intotal = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.selectedItems = [];
      state.checkoutData = {
        subtotal: 0,
        intotal: 0,
        selectedItemsData: []
      };
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  setSelectedItems,
  setCheckoutData,
  setIntotal,
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;


// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});