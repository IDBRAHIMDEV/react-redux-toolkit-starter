import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getAllPosts = createAsyncThunk('posts/getAllPosts', async () => {

    try {
      const { data } = await axios.get('http://localhost:3001/posts')
      return data
    } catch (error) {
      return error.message
    }
  
  })
  
  export const storePost = createAsyncThunk('posts/storePost', async (post) => {
  
    try {
        const { data } = await axios.post('http://localhost:3001/posts', post)
        return data
    } catch (error) {
      return error.message
    }
  
  })

  export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
        console.log('post action :', post, 'id: ', post.id)
        try {
            const { data } = await axios.put(`http://localhost:3001/posts/${post.id}`, post)
            return data
        } catch (error) {
        return error.message
        }
    })
  
  export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  
        try {
            const response = await axios.delete(`http://localhost:3001/posts/${id}`)
            return id
        } catch (error) {
        return error.message
        }
  
  })