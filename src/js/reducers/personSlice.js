import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("persons")) ?? {};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson(state, action) {
      const { id = Date.now(), name, items = {} } = action.payload;
      state[id] = { name, items } ;
    },
    removePerson(state, action) {
      delete state[action.payload];
    },
    addItem(state, action) {
      const { personId, itemId } = action.payload;
      state[personId].items[itemId] = 1;
    },
    decreaseItem(state, action) {
      const { personId, itemId } = action.payload;
      const curr = state[personId].items[itemId];
      if (curr > 0) state[personId].items[itemId] -= 1;
      else delete state[personId].items[itemId];
    },
    increaseItem(state, action) {
      const { personId, itemId } = action.payload;
      state[personId].itemsp[itemId] += 1;
    },
  },
});

export const { addPerson, addItem, removePerson } = personSlice.actions;
export default personSlice.reducer;
