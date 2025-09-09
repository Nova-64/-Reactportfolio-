import React from "react";
import { useParams } from "react-router-dom";
import post from "./post";
import "./Blog.css";

const Blog = () => {
    return (
        <div className="blog-page">
            <h2>My Blog</h2>
            {post.map((post, index) => (
                <div className="blog-post" key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.preview}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
