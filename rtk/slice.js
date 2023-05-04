import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts.push({
        id: action.payload.id,
        title: action.payload.title,
        text: action.payload.text,
        commit: [],
      });
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item?.id !== action.payload);
    },
    getCommit: (state, action) => {
      state.posts.some((item) => {
        if (item?.id === action.payload.id) {
          item?.commit.push({
            id: new Date().toISOString(),
            comment: action.payload.text,
          });
        }
      });
    },
    deleteComment: (state, action) => {
      state.posts.some((item) => {
        item.commit = item?.commit.filter((item) => item.id !== action.payload);
      });
    },
  },
});

export const { getPosts, deletePost, getCommit, deleteComment } =
  postsSlice.actions;
export default postsSlice.reducer;
