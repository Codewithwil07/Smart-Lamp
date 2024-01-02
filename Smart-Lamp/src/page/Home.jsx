import React from 'react';
import Dashboard from '../component/Dashboard';
import Menu from '../component/Menu';
import Toggle from './Toggle';
import Intencity from './Intencity';
import Time from './Time';

const Home = () => {
    return (
        <main className='h-screen w-full p-4 bg-gradient-to-r from-slate-100 to-slate-200 overflow-x-hidden'>
            <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 gap-20 md:gap-10'>
                <Dashboard />
                <Menu />
                <hr className='border-2 w-screen' />
            </div>
            <div className='bg-gradient-to-tr  from-violet-300 to-purple-300 p-10 rounded-xl flex flex-col gap-10 mt-5'>
                <Toggle />
                <Intencity />
                <Time />
            </div>
        </main>
    );
};

export default Home;
