import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [showItems, setShowItems] = useState(3)

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
                        blogs?.slice(0, showItems)?.map((blg) => <Blog key={blg.id} blg={blg} />)
                    }
                </div>
                <div  className={showItems > 3? 'hidden':'flex justify-center mt-8'}>
                    <button onClick={() => setShowItems(6)} className="py-2 px-4 md:px-6 lg:px-8 border border-blue-800 hover:bg-blue-800 text-blue-800 hover:text-white rounded-3xl">Load More</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;