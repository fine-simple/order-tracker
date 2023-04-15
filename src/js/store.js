import { configureStore } from "@reduxjs/toolkit";

import personReducer from "./reducers/personSlice";
import itemReducer from "./reducers/itemSlice";
import sharedReducer from "./reducers/sharedSlice";
import loggerMiddleware from "./middleware/logger";

export default configureStore({
  reducer: {
    persons: personReducer,
    items: itemReducer,
    shared: sharedReducer,
  },
});
