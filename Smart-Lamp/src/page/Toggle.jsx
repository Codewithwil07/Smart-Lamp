/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';

const Toggle = () => {
    <script src='/socket.io/socket.io.js'></script>;
    function Arduino() {
        const url = 'http://localhost:3000/arduinoApi';
        let button = document.getElementById('switch');
        if (button.checked == true) {
            let data = '1';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ data }),
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            let data = '2';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({ data }),
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }

    return (
        <div className='flex gap-2 p-5 cursor-pointer items-center justify-between rounded-xl bg-gradient-to-r from-blue-200 to-sky-200 shadow-md'>
            <p className='text-center text-2xl font-bold'>ON : OFF</p>
            <div className='relative bottom-2.5'>
                <input type='checkbox' id='switch' onChange={Arduino} />
                <label htmlFor='switch'></label>
            </div>
        </div>
    );
};

export default Toggle;
