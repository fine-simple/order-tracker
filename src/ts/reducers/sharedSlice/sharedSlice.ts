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
import { clearAll, loadFromLocalStorage } from "../../actions";

const initialState: Shared = {
  tax: 0,
  expenses: 0,
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
    setExpenses(state, action: SetTipAction) {
      state.expenses = action.payload;
    },
    setDiscount(state, action: SetDiscountAction) {
      state.discount = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(clearAll, () => initialState);
    builder.addCase(loadFromLocalStorage, () => {
      const data = JSON.parse(localStorage.getItem("shared") as string);
      if (data) {
        return data;
      }
    });
  },
});

export const {
  addSharedItem,
  decreaseSharedItem,
  increaseSharedItem,
  setTax,
  setExpenses,
  setDiscount,
} = sharedSlice.actions;

export default sharedSlice.reducer;
