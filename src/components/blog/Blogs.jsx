import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div>
            <div className='max-w-6xl mx-auto my-16 px-2 lg:px-0'>
                <div className='my-4'>
                    <h2 className="text-3xl font-bold text-center mt-8">Blogs</h2>
                    <p className="text-center py-4">We've had the pleasure of working with industry-defining brands. These are just some of them.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        blogs.map((blg) => <Blog key={blg.id} blg={blg} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;