import axios from "axios";
import { postSlice } from "./slicePosts";
import { AppDispatch } from "./store";


export const fetchPosts = () => async (dispatch:AppDispatch) => {
    try{
        dispatch(postSlice.actions.postFetching())
        const res = await axios.get("/api/postsData")
        dispatch(postSlice.actions.postFetchingSuccess(res.data))
    } catch (e:any) {
        dispatch(postSlice.actions.postFetchingError(e.message))
    }
}