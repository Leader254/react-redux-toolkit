import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Alan Jackson" },
  { id: "2", name: "George Strait" },
  { id: "3", name: "Garth Brooks" },
  { id: "4", name: "Kenny Chesney" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
