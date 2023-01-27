import { createSlice } from "@reduxjs/toolkit";

const avatar = createSlice({
  name: "avatar",
  initialState: { avatar: 1 },
  reducers: {
    changeAvatar(state, actions) {
      state.avatar = actions.payload;
    },
  },
});

export const { changeAvatar } = avatar.actions;

export default avatar;
