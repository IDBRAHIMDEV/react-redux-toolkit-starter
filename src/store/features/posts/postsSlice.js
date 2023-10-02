import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    post: {
      title: '',
      image: '',
      body: ''
    },
    posts: [
        {
            image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/TZLXpJ9ORhmBgJUs1v5A",
            title: "Learn Python 10",
            body: "learn python to became an analytics developer",
            active: true,
            id: 3
          },
          {
            title: "Learn Spring boot",
            body: "Learn how to create a web application with Spring boot using Java",
            image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/4jgHzQESLa2F5uccFGc2",
            id: 4
          },
          {
            title: "Learn Vue 3",
            body: "learn frontend app from scratch with Vue and VueX",
            image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/VXYNEvjqRvaVy7cvy0he",
            id: 6
          },
          {
            title: "Learn Symfony 6",
            image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/otcfFBbQSsuFqhl5W2mF",
            body: "learn how to create a backend apps",
            id: 8
          },
          {
            title: "learn javascriprt",
            image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/7zQdVPcjSnGj7TCSIF5P",
            body: "javascript is the most popular language in the world",
            id: 9
          },
          {
            title: "learn GraphQL",
            image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/kaxv1R7PQPgVsvTnYuZM",
            body: "learn how to connect with Api using graphQl technology",
            id: 10
          },
          {
            title: "Learn Angular",
            image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/E91FpFwIRW216LqpMIY6",
            body: "sdfdfdf",
            id: 11
          }
    ]
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
      },
      setPost: (state, action) => {
        state.post[action.payload.name] = action.payload.value
      },
      allPosts: (state) => {
        return state.posts
      },
      persistPost: (state) => {
        const newPost = {
          ...state.post,
          id: nanoid()
        }
        console.log(newPost)
        state.posts.unshift(newPost)
      },
      deletePost: (state, action) => {
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload)
        }
      }
    }
});

export const { reset, setPost, allPosts, persistPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer