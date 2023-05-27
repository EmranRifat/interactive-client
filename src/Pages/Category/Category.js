import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllVideo from '../Home/AllVideo';

const Category = () => {
    const videos=useLoaderData()
    return (
        <div>
        <p>{videos.title}</p>
         {
            videos.map(v=><AllVideo key={v.id} video={v}></AllVideo>)
         }
        </div>
    );
};

export default Category;