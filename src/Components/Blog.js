import React from 'react'
import { useState } from 'react';

const Blog = ({ userName, userImage, blogEntry, setBlogEntry }) => {
    const [blogArray, setBlogArray] = useState([]);


    const DeleteBlog = (blogID) => {
        setBlogArray(blogArray.filter((ogBlog) => {
            if (ogBlog.id !== blogID) {
                return ogBlog;
            }
        }))
    }

    return (
        <div id="main-blog-container">
            <img id="user-image" src={userImage}></img>
            <h3>Welcome {userName}!</h3>

            <div id="blog-to-post">
                <textarea
                    id="text-area"
                    // value={blogEntry}
                    placeholder="Enter your blog post here."
                    onChange={(event) => {
                        const newBlogEntry = event.target.value;
                        setBlogEntry(newBlogEntry);
                        // console.log("blog entry: ", newBlogEntry)

                    }}></textarea>

                <button
                    id="post-blog-button"
                    onClick={() => {
                        setBlogArray([{ text: blogEntry, id: blogArray.length + 1 }, ...blogArray]);
                        console.log("blog array: ", blogArray)
                    }}
                >Post Blog</button>
                <hr />

                <div id="all-the-blogs">
                    {blogArray.map((blog, index) => {
                        return (
                            <div id="single-blog-entry" key={`blog-${index}`}>
                                <img id="user-image-in-post" src={userImage}></img>
                                <div>{userName}</div>
                                <div>{blog.text}</div>
                                <button
                                    id="delete-button"
                                    type="submit"
                                    onClick={() => {
                                        DeleteBlog(blog.id);
                                    }}
                                >Delete Post</button>
                            </div>)

                    })}
                </div>

            </div>


        </div>
    )
}



export default (Blog)
