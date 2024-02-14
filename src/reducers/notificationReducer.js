import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    createNotification(state, action) {
      return action.payload;
    },
    resetNotification(state, action) {
      return null;
    },
  },
});

export const setNotification = (content, time) => {
  const timeConverted = time * 1000;
  return (dispatch) => {
    dispatch(createNotification(content));
    setTimeout(() => {
      dispatch(resetNotification());
    }, timeConverted);
  };
};

export const { createNotification, resetNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
