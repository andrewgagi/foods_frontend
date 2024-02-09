import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ShopCartSlice from "./ReduxFeatures/CartSlice";
import UserSlice from "./ReduxFeatures/UserSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const rootReducers = combineReducers({
  cart: ShopCartSlice,
  user: UserSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});
