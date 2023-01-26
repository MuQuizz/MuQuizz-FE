import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "login",
  initialState: { login: false },
  reducers: {
    changeLoginStatus(state, action) {
      state.login = action.payload;
    },
  },
});

export const { changeLoginStatus } = login.actions;

export default login;
