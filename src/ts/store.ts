import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./reducers/personSlice/personSlice";
import itemReducer from "./reducers/itemSlice/itemSlice";
import sharedReducer from "./reducers/sharedSlice/sharedSlice";
import localStorageMiddleware from "./middleware/localStorage";

const store = configureStore({
  reducer: {
    persons: personReducer,
    items: itemReducer,
    shared: sharedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
