import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const HomeLayOut = () => {
    return (
        <div>
            <header>
                <Header></Header>
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