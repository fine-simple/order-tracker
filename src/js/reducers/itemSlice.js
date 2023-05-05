import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("items")) ?? {};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id = Date.now(), name, price } = action.payload;
      state[id] = { name, price };
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
