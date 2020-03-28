import rootReducer from "../reducers";
import {
  configureStore as configureToolkitStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";

export default function configureStore(initialState = {}) {
  return configureToolkitStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
      })
    ]
  });
}
