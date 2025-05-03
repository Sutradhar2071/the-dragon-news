import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayOut = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto py-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto py-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section className='left'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right'></section>
            </main>
        </div>
    );
};

export default HomeLayOut;