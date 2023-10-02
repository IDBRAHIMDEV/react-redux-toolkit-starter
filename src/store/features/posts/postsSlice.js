import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, storePost, deletePost, updatePost } from "./postActions"

const initialState = {
    post: {
      title: '',
      image: '',
      body: ''
    },
    posts: [],
    edit: false,
    isLoading: false,
    message: ''
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      reset: (state) => {
        state.post =  {
          title: '',
          image: '',
          body: ''
        }
        state.edit = false
      },
      setPost: (state, action) => {
        state.post[action.payload.name] = action.payload.value
      },
      allPosts: (state) => {
        return state.posts
      },
      editPost: (state, action) => {
        state.edit = true
        state.post = action.payload
      }
    },
    extraReducers: {
      [getAllPosts.pending]: (state) => {
        state.isLoading = true
      },
      [getAllPosts.fulfilled]: (state, action) => {
        state.posts = action.payload
        state.isLoading = false
      },
      [getAllPosts.rejected]: (state, action) => {
        state.message = action.payload
        state.isLoading = false
      },
      [storePost.pending]: (state) => {
        state.isLoading = true
      },
      [storePost.fulfilled]: (state, action) => {
        state.posts.unshift(action.payload)
        state.isLoading = false
      },
      [storePost.rejected]: (state, action) => {
        state.message = action.payload
        state.isLoading = false
      },
      [deletePost.pending]: (state) => {
        state.isLoading = true
      },
      [deletePost.fulfilled]: (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload)
        state.isLoading = false
      },
      [deletePost.rejected]: (state, action) => {
        state.message = action.payload
        state.isLoading = false
      },
      [updatePost.pending]: (state) => {
        state.isLoading = true
      },
      [updatePost.fulfilled]: (state, action) => {
        console.log(action)
        state.posts = state.posts.map(post => post.id === action.payload.id ? action.payload : post)
        state.isLoading = false
        state.edit = false
        state.post =  {
          title: '',
          image: '',
          body: ''
        }
      },
      [updatePost.rejected]: (state, action) => {
        state.message = action.payload
        state.isLoading = false
      }
    }
});

export const { reset, setPost, allPosts, editPost } = postsSlice.actions;
export default postsSlice.reducer