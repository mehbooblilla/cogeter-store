import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  cartOpen:false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.cart_id === item.cart_id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(i => i.cart_id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(i => i.cart_id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(i => i.cart_id !== action.payload);
    },
    openCart:state=>{
        state.cartOpen=true
    },
    closeCart:state=>{
        state.cartOpen=false
    },
  
  },
});
export const selectCartSubtotal = state => {
    return state.cart.items.reduce((total, item) => {
      return total + item.regular_price * item.quantity;
    }, 0);
  };

export const { addItemToCart, incrementQuantity, decrementQuantity, removeItemFromCart,openCart,closeCart } = cartSlice.actions;
export default cartSlice.reducer;