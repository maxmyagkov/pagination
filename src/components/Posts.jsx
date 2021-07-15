import React from 'react'
import { Loader } from './Loader'

export const Posts = ({ posts, loader }) => {

    if (loader) {
        return <Loader />
    }
    return (
        <ul className="list-group mb-3" >
            {posts.map((post) => (
                <li className="list-group-item" key={post.id}>{post.id} {post.title}</li>
            ))}
        </ul>
    )
}
