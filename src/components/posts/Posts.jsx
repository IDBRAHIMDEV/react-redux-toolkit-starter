import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset, setPost, editPost } from '../../store/features/posts/postsSlice'
import { storePost, deletePost, getAllPosts, updatePost } from "../../store/features/posts/postActions"

const Posts = () => {
    
    const dispatch = useDispatch()
    const {posts, post, edit, isLoading} = useSelector(state => state.blog)

    const [toggle, setToggle] = useState(false)

    const onSubmit = (e) => {

        e.preventDefault();

        if(edit) {
            dispatch(updatePost(post, post.id))
        }else {
            dispatch(storePost(post))
        }

        dispatch(reset())
        setToggle(false)
    }

    const editablePost = (post) => {
        dispatch(editPost(post))
        setToggle(true)
    }

    const toggable = () => {
        dispatch(reset())
        setToggle(prev => !prev)
    }


    useEffect(() => {
        dispatch(getAllPosts())
        console.log(posts)
    }, [])

    if(isLoading) {
        return (
            <div className="row my-4">
                <div className="col-6 my-5 mx-auto text-center">
                    <div className="alert alert-info" role="alert">
                        <strong>loading...</strong>
                    </div>
                    
                </div>
            </div>
        )
    }

  return (
    <>
        <div className="row my-4">
            <div className="col-6">
                <h3>List of posts</h3>
            </div>
            <div className="col-6 text-end">
                <button onClick={ () => toggable() } className="btn btn-sm btn-success">Add</button>
            </div>
        </div>
        
        {toggle && (
            <div className="row my-3">
                <div className="col-6 mx-auto">
                    <form onSubmit={ onSubmit }>
                        <div className="form-group my-3">
                            <label htmlFor="title">Title</label>
                            <input onChange={ (e) => dispatch(setPost({name: e.target.name, value: e.target.value})) } value={post.title} type="text" className="form-control" id="title" name="title" />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="image">Image</label>
                            <input onChange={ (e) => dispatch(setPost({name: e.target.name, value: e.target.value})) } value={post.image} type="text" className="form-control" id="image" name="image" />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="body">Body</label>
                            <textarea onChange={ (e) => dispatch(setPost({name: e.target.name, value: e.target.value})) } value={post.body} id="body" className='form-control' rows="10" name="body"></textarea>
                        </div>
                        <div className="d-grid my-2">
                            <button className={`btn ${edit ? 'btn-warning' : 'btn-primary' }`}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )}

        <div className="row my-4">

            {posts && posts.map(post => (

                    <div key={post.id} className="col-md-4 my-2">
                        <div className="card">
                            <img className="card-img-top" src={post.image} alt="Title" />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body.substring(0, 30)}</p>
                                <div className="my-2 text-center">
                                    <button onClick={ () => editablePost(post) } className="me-2 btn btn-sm btn-warning">Edit</button>
                                    <button onClick={ () => dispatch(deletePost(post.id)) } className="btn btn-sm btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

            ))}

        </div>
    </>
  )
}

export default Posts