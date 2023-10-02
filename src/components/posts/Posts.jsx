import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset, setPost, persistPost, deletePost } from "../../store/features/posts/postsSlice"

const Posts = () => {
    
    const dispatch = useDispatch()
    const {posts, post} = useSelector(state => state.blog)

    const [toggle, setToggle] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(persistPost())
        dispatch(reset())
        setToggle(false)
    }

  return (
    <>
        <div className="row my-4">
            <div className="col-6">
                <h3>List of posts</h3>
            </div>
            <div className="col-6 text-end">
                <button onClick={ () => setToggle(prev => !prev) } className="btn btn-sm btn-success">Add</button>
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
                            <button className='btn btn-primary'>Submit</button>
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
                                    <buttonc onClick={ () => dispatch(deletePost(post.id)) } className="btn btn-sm btn-danger">Delete</buttonc>
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