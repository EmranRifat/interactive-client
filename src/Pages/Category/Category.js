import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllVideo from '../Home/AllVideo';
import Home from '../Home/Home';

const Category = () => {
    const videos=useLoaderData()
    return (
        <div>
        <p>{videos.title}</p>
         {
            videos.map(v=><Home key={v.id} video={v}></Home>)
         }
        </div>
    );
};

export default Category;