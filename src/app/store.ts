import { configureStore } from "@reduxjs/toolkit";
import reduxCRUDReducer from "../component/ReduxCRUD/reduxCRUDSlice";

export const store = configureStore({
  reducer: {
    reduxCRUD: reduxCRUDReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
