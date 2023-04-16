import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem(state, action) {
      const { name, price } = action.payload;
      state[Date.now()] = { name, price };
    },
    editItem(state, action) {
      const { id, name, price } = action.payload;
      state[id].name = name;
      state[id].price = price;
    },
    removeItem(state, action) {
      delete state[action.payload.id];
    },
  },
});

export const { addItem, editItem, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
