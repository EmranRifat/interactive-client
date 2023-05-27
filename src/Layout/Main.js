import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import SideNav from '../Shared/Header/SideNav/SideNav';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex '>
           <div className='flex-initial w-80 bg-gray-200  h-screen hidden lg:block'> <SideNav></SideNav></div>
           <div className='flex-initial w-full'>  <Outlet></Outlet></div>
          
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;