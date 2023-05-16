import { createSlice } from "@reduxjs/toolkit";

type commitData = {
  id: string,
  comment: string
}

type PostData = {
  id?: string,
  title?: string,
  text?:string,
  commit?: commitData[]
}

// type Text = Omit<PostData, "title">

type PostState = {
  posts: PostData[],
};

const initialState:PostState = {
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
          item.commit?.push({
            id: new Date().toISOString(),
            comment: action.payload.text,
          });
        }
      });
    },
    deleteComment: (state, action) => {
      state.posts.some((item) => {
        if (item) {
          item.commit = item.commit?.filter(
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
