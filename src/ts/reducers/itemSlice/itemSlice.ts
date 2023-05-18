import type {
  AddItemAction,
  EditItemAction,
  Items,
  RemoveItemAction,
} from "./types.d";
import { clearAll, loadFromLocalStorage } from "../../actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Items = {};

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
  extraReducers: builder => {
    builder.addCase(clearAll, () => initialState);
    builder.addCase(loadFromLocalStorage, () => {
      const data = JSON.parse(localStorage.getItem("items") as string);
      if (data) {
        return data;
      }
    });
  },
});

export const { addItem, editItem, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
