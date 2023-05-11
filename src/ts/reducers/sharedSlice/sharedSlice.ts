import { createSlice } from "@reduxjs/toolkit";
import type {
  Shared,
  AddSharedItemAction,
  DecreaseSharedItemAction,
  IncreaseSharedItemAction,
  SetDiscountAction,
  SetTaxAction,
  SetTipAction,
} from "./types";

const initialState: Shared = JSON.parse(localStorage.getItem("shared") as string) ?? {
  tax: 0,
  tip: 0,
  discount: 0,
  shared: [],
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    addSharedItem(state, action: AddSharedItemAction) {
      const { itemId, quantity = 1 } = action.payload;
      state.shared[itemId] = quantity;
    },
    decreaseSharedItem(state, action: DecreaseSharedItemAction) {
      const { itemId } = action.payload;
      const curr = state.shared[itemId];
      if (curr > 0) state.shared[itemId] -= 1;
      else delete state.shared[itemId];
    },
    increaseSharedItem(state, action: IncreaseSharedItemAction) {
      const { itemId } = action.payload;
      state.shared[itemId] += 1;
    },
    setTax(state, action: SetTaxAction) {
      state.tax = action.payload;
    },
    setTip(state, action: SetTipAction) {
      state.tip = action.payload;
    },
    setDiscount(state, action: SetDiscountAction) {
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
