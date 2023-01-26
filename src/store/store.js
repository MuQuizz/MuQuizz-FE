import { configureStore } from "@reduxjs/toolkit";
import login from "./loginSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage: storage, // 저장 공간
  whitelist: ["login"], // 유지하고 싶은 값
  blacklist: [], // 유지하지 않을 내용
};

const reducer = combineReducers({
  login: login.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
