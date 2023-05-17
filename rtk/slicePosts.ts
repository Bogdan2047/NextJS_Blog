import { createSlice } from "@reduxjs/toolkit"
import { postsSlice } from "./slice"

type PostState = {
    posts: string[],
    isLoading: boolean,
    error: string
}

const initialState:PostState = {
    posts: [],
    isLoading: false,
    error: ""
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postFetching(state)  {
            state.isLoading = true;
        },
        postFetchingSuccess(state, action)  {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload
        },
        postFetchingError(state, action)  {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {postFetching, postFetchingSuccess, postFetchingError} = postSlice.actions
export default postSlice.reducer;