import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("shared")) ?? {
  tax: 0,
  tip: 0,
  discount: 0,
  shared: {},
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    addSharedItem(state, action) {
      const { itemId, quantity = 1 } = action.payload;
      state.shared[itemId] = quantity;
    },
    decreaseSharedItem(state, action) {
      const { itemId } = action.payload;
      const curr = state.shared[itemId];
      if (curr > 0) state.shared[itemId] -= 1;
      else delete state.shared[itemId];
    },
    increaseSharedItem(state, action) {
      const { itemId } = action.payload;
      state.shared[itemId] += 1;
    },
    setTax(state, action) {
      state.tax = action.payload;
    },
    setTip(state, action) {
      state.tip = action.payload;
    },
    setDiscount(state, action) {
      state.discount = action.payload;
    },
  },
});

export const {
  addSharedItem,
  decreaseSharedItem,
  increaseSharedItem,
  setTax,
  setTip,
  setDiscount,
} = sharedSlice.actions;

export default sharedSlice.reducer;
