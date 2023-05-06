import { createSlice } from "@reduxjs/toolkit";

type commitData = {
  id: string,
  comment: string
}

type postData = {
  id?: string,
  title?: string,
  text?:string,
  commit?: commitData[]
}

type postState = {
  posts: postData[],
};

const initialState:postState = {
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
      state.posts = state.posts.filter((item:any) => item?.id !== action.payload);
    },
    getCommit: (state, action) => {
      state.posts.some((item:any) => {
        if (item?.id === action.payload.id) {
          item?.commit.push({
            id: new Date().toISOString(),
            comment: action.payload.text,
          });
        }
      });
    },
    deleteComment: (state, action) => {
      state.posts.some((item:any) => {
        if (item) {
          item.commit = item?.commit.filter(
            (item:any) => item.id !== action.payload
          );
        }
      });
    },
  },
});

export const { getPosts, deletePost, getCommit, deleteComment } =
  postsSlice.actions;
export default postsSlice.reducer;
