import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: { modal: false },
  reducers: {
    changeModalStatus(state) {
      state.modal = !state.modal;
    },
  },
});

export const { changeModalStatus } = modal.actions;

export default modal;
