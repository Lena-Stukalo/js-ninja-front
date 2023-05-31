import { configureStore, createSlice } from "@reduxjs/toolkit";
import { herosApi } from "./heroAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
export const heroSlice = createSlice({
  name: "heros",
  initialState: {},
  reducers: {},
});

export const { ChangeFilter, Add, Remove, FromLocal } = heroSlice.actions;

export const store = configureStore({
  reducer: {
    [herosApi.reducerPath]: herosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    herosApi.middleware,
  ],
});
setupListeners(store.dispatch);
