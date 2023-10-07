import React from 'react';

const Blog = ({ blg }) => {
    const { title, image, description, date } = blg;
    return (
        <div className='shadow hover:shadow-md rounded-lg'>
            <div>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className='space-y-3 p-4'>
                <h2 className='text-[1rem] font-bold'>{title}</h2>
                <p>{description.length >= 90 ? description.slice(0, 90) : description}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Blog;