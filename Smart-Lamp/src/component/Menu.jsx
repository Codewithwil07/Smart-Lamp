import React from 'react';
import OnOf from '../assets/image/idea.png';
import Intens from '../assets/image/Synchronize.png';
const Menu = () => {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <p className='font-bold text-2xl bg-slate-500 w-full p-2 rounded-xl shadow-lg text-white'>Fitur</p>
            <div className='flex gap-2 p-5 cursor-pointer items-center rounded-xl bg-gradient-to-b from-sky-200 to-blue-200 shadow-md'>
                <img src={OnOf} alt='' className='w-10 p=2 bg-sky-300 rounded-xl' />
                <p className='font-semibold'>On/Of</p>
            </div>
            <div className='flex gap-2 p-5 cursor-pointer items-center rounded-xl bg-gradient-to-r from-amber-200 to-yellow-500 shadow-md'>
                <img src={Intens} alt='' className='w-10 p=2 bg-amber-300 rounded-xl' />
                <p className='font-semibold'>Intensitas Cahaya</p>
            </div>
            <div className='flex gap-2 p-5 cursor-pointer items-center rounded-xl bg-gradient-to-r shadow-md from-lime-100 to-lime-200'>
                <img src={Intens} alt='' className='w-10 p=2 bg-lime-300 rounded-xl' />
                <p className='font-semibold'>Lifetime</p>
            </div>
        </div>
    );
};

export default Menu;
