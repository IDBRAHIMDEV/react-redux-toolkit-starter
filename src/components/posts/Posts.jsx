import React from 'react'
import { useSelector } from 'react-redux'
import { allPosts } from '../../store/features/posts/postsSlice'

const Posts = () => {

    const posts = useSelector(allPosts)

    console.log(posts)

  return (
    <>
        <div className="row my-4">
            <div className="col-6">
                <h1>List of posts</h1>
            </div>
            <div className="col-6 text-end">
                <button className="btn btn-sm btn-success">Add</button>
            </div>
        </div>

        <div className="row my-4">

            {posts && posts.map(post => (

                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src={post.image} alt="Title" />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body.substring(0, 25)}</p>
                            </div>
                        </div>
                    </div>

            ))}

        </div>
    </>
  )
}

export default Posts