import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className='container mt-5'>
            <h2 className='my-5 text-center' style={{ color: '#606060FF' }}>All The Blogs</h2>
            <div className="blogs-container">

                <div className='blogs'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;