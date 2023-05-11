import { createSlice } from "@reduxjs/toolkit";
import type {
  AddItemAction,
  EditItemAction,
  Items,
  RemoveItemAction,
} from "./types.d";

const initialState: Items =
  JSON.parse(localStorage.getItem("items") as string) ?? {};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem(state, action: AddItemAction) {
      const { id = Date.now(), name, price } = action.payload;
      state[id] = { name, price };
    },
    editItem(state, action: EditItemAction) {
      const { id, name, price } = action.payload;
      state[id].name = name;
      state[id].price = price;
    },
    removeItem(state, action: RemoveItemAction) {
      delete state[action.payload.id];
    },
  },
});

export const { addItem, editItem, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
