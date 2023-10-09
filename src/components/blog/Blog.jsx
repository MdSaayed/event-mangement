import React from 'react';

const Blog = ({ blg }) => {
    const { title, image, description, date, author } = blg;
    return (
        <div className='shadow hover:shadow-md rounded'>
            <div>
                <img className='w-full rounded-3xl h-[250px]' src={image} alt="" />
            </div>
            <div className='space-y-2 p-4'>
                <h2 className='text-[1rem] font-bold'>{title}</h2>
                <p>{description.length >= 90 ? description.slice(0, 90) : description}</p>
                <p className='text-[#A5A5A5]'>{date} - {author}</p>
            </div>
        </div>
    );
};

export default Blog;