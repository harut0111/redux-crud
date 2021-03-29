import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface postsType {
  id: string;
  title: string;
  message: string;
}

export interface reduxCRUDType {
  posts: Array<postsType>;
}

const initialState: reduxCRUDType = {
  posts: [],
};

export const reduxCRUD = createSlice({
  name: "reduxCRUD",
  initialState: initialState,

  reducers: {
    post: (state, action: PayloadAction<postsType>) => {
      state.posts.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    update: (state, action: PayloadAction<postsType>) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

export const { post, remove, update } = reduxCRUD.actions;

export const selectPosts = (state: RootState): Array<postsType> =>
  state.reduxCRUD.posts;

export default reduxCRUD.reducer;
