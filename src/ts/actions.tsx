import { createAction } from "@reduxjs/toolkit";

export const clearAll = createAction("CLEAR_ALL");

export const loadFromLocalStorage = createAction("LOAD_FROM_LOCAL_STORAGE");
