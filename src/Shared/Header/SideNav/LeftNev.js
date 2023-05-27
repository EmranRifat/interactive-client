import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav= ({category, setPercent,percent}) => {

    return (
        <div className='flex text-gray-600 hover:underline hover:text-teal-700 border-b border-blue-300' >
          <div class="flex w-8 h-8  text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-5 h-5"
                                  >
                                  
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    />
                                  </svg>
                                
                                </div> 
                                <p className='flex text-blue-600 pr-2'>00:{category.id}</p>
            <p>
                <Link onClick={()=>setPercent(percent+10)} to={`/category/${category.id}`}>{category.name}</Link>
            </p>
 
          
        </div>
    );
};

export default LeftNav;