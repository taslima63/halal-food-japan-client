import React from 'react';
import './Blog.css';

const Blog = ({ blog }) => {
    const { question, answer, img, author, date } = blog;
    return (
        <div className='blog-container p-4 shadow '>
            <div className='blog-banner my-3 shadow'>
                <img className='rounded-3' src={img} alt="" />
            </div>
            <div className='p-2'>
                <h4 className='title rainbowhead my-3 text-center'>Halal Food Japan</h4>
                <div className='text-start'>
                    <h3 className='question  text-center'>{question}</h3>
                    <small className='pe-2'>Written By :
                        <span
                            style={{ color: '#9952e0' }}
                        >{author}</span>
                        <span
                            style={{ color: '#52e0e0', fontSize: "20px", fontWeight: "500", margin: '0px 2px' }}
                        >|</span>
                        {date}
                    </small>

                    <p className='answer'>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;