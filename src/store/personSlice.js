import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  1: {
    name: "John",
    items: {
      1: 5,
    },
  },
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson(state, action) {
      const { name, items = Map() } = action.payload;
      state[Date.now()] = { name, items };
    },
    editPerson(state, action) {
      const { id, name, items } = action.payload;
      state[id].name = name;
      state[id].items = items;
    },
    removePerson(state, action) {
      delete state[action.payload.id];
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
      const curr = state.get(personId).items.get(itemId);
      state[personId].itemsp[itemId] += 1;
    },
  },
});

export const { addPerson, addItem, editPerson, removePerson } =
  personSlice.actions;
export default personSlice.reducer;
