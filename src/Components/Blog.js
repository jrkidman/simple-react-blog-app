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
            <div id="blog-header">
                <div id="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/1365/1365481.png"
                        height="75px"
                        width="75px"
                        alt="logo" />
                </div>
                <img id="user-image" src={userImage}></img>

            </div>
            <div><hr /></div>

            <h3 id="welcome-user">Welcome {userName}!</h3>

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
                                <header id="entry-header">
                                    <img id="user-image-in-post" src={userImage}></img>
                                    <div id="user-in-entry" >{userName}</div>
                                </header>
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
