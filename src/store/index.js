import { configureStore } from "@reduxjs/toolkit";

import personReducer from "./personSlice";
import itemReducer from "./itemSlice";
import sharedReducer from "./sharedSlice";

export default configureStore({
  reducer: {
    persons: personReducer,
    items: itemReducer,
    shared: sharedReducer,
  },
});
