/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from 'react';
import io from 'socket.io'

const Time = () => {
    const [startHour, setstartHour] = useState(0);
    const [startMinute, setstartMinute] = useState(0);
    const [endHour, setendHour] = useState(0);
    const [endMinute, setendMinute] = useState(0);

    const handleTime = () => {
        fetch(
            'http://localhost:3000/arduinoApi?startHour=${startHour}&startMinute=${startMinute}&endHour=${endHour}&endMinute=${endMinute}'
        )
            .then((response) => response.text())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error', error));
    };

    useEffect(() => {
        const socket = io('http:/localhost:3000/arduinoApi');

        socket.on('Serve', (data) => {
            console.log(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className='flex flex-col gap-y-10 bg-gradient-to-r shadow-md from-lime-100 to-lime-200 rounded-md w-full self-center p-8'>
            <form className='flex flex-row gap-10 items-center justify-center md:gap-32 md:justify-center'>
                <div className='flex gap-6'>
                    <p for='start_time' className='font-bold text-2xl'>
                        Mulai Jam
                    </p>
                    <input
                        type='number'
                        value={startHour}
                        onChange={(e) => setstartHour(e.target.value)}
                        id='start_time'
                        min={0}
                        max={23}
                        className='w-40 px-4 text-xl bg-lime-300 shadow-md cursor-pointer'
                    />
                    <p for='start_time' className='font-bold text-2xl'>
                        Mulai Menit
                    </p>
                    <input
                        type='number'
                        value={startMinute}
                        onChange={(e) => setstartMinute(e.target.value)}
                        id='start_time'
                        min={0}
                        max={59}
                        className='w-40 px-4 text-xl bg-lime-300 shadow-md cursor-pointer'
                    />
                </div>

                <div className='flex gap-6'>
                    <p for='end_time' className='font-bold text-2xl'>
                        Akhir Jam
                    </p>
                    <input
                        type='number'
                        value={endHour}
                        onChange={(e) => setendHour(e.target.value)}
                        id='end_time'
                        min={0}
                        max={23}
                        className='w-40 px-4 text-xl bg-lime-300 shadow-md cursor-pointer'
                    />
                    <p for='end_time' className='font-bold text-2xl'>
                        Akhir Menit
                    </p>
                    <input
                        type='number'
                        value={endMinute}
                        onChange={(e) => setendMinute(e.target.value)}
                        id='end_time'
                        min={0}
                        max={59}
                        className='w-40 px-4 text-xl bg-lime-300 shadow-md cursor-pointer'
                    />
                </div>
            </form>
            <input
                type='button'
                value='Submit'
                className='w-[45rem] px-4 text-xl font-bold p-1 bg-lime-300 shadow-md cursor-pointer self-center'
                onClick={handleTime}
            />
        </div>
    );
};

export default Time;
