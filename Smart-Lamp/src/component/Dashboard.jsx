/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BiCloud } from 'react-icons/bi';

const Dashboard = () => {
    const [waktu, setWaktu] = useState(new Date());
    // const [cuaca, setCuaca] = useState([]);
    // useEffect(() => {
    //     fetch(
    //         'https://cuaca-gempa-rest-api.vercel.app/weather/jawa-timur/sumenep'
    //     )
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             // console.log(data);
    //             setCuaca(data);
    //         });
    // }, []);

    useEffect(() => {
        const updateWaktu = () => {
            setWaktu(new Date());
        };
        const interval = setInterval(updateWaktu, 1000);
        return () => clearInterval(interval);
    }, []);

    const hariIndeks = waktu.getDay();
    let hariTeks;

    switch (hariIndeks) {
        case 1:
            hariTeks = 'Senin';
            break;
        case 2:
            hariTeks = 'Selasa';
            break;
        case 3:
            hariTeks = 'Rabu';
            break;
        case 4:
            hariTeks = 'Kamis';
            break;
        case 5:
            hariTeks = `Jum'at`;
            break;
        case 6:
            hariTeks = 'Sabtu';
            break;
        case 7:
            hariTeks = 'Minggu';
            break;
        default:
            hariTeks = 'Error';
            break;
    }

    const bulanIndeks = waktu.getMonth();
    let bulanTeks;

    switch (bulanIndeks) {
        case 0:
            bulanTeks = 'Januari';
            break;
        case 1:
            bulanTeks = 'Februari';
            break;
        case 2:
            bulanTeks = 'Maret';
            break;
        case 3:
            bulanTeks = 'April';
            break;
        case 4:
            bulanTeks = `Mei`;
            break;
        case 5:
            bulanTeks = 'Juni';
            break;
        case 6:
            bulanTeks = 'Juli';
            break;
        case 7:
            bulanTeks = 'Agustus';
            break;
        case 8:
            bulanTeks = 'September';
            break;
        case 9:
            bulanTeks = 'Oktober';
            break;
        case 10:
            bulanTeks = 'Desember';
            break;
        case 11:
            bulanTeks = 'Desember';
            break;
        default:
            bulanTeks = 'Error';
            break;
    }

    const jam = waktu.getHours();
    const menit = waktu.getMinutes();
    const tgl = waktu.getDate();

    return (
        <div className='bg-gradient-to-tr w-full p-9 rounded-2xl shadow-md text-slate-800 from-violet-300 to-purple-300'>
            <div className='flex flex-col justify-between'>
                <div className='flex items-center self-end'>
                    <div className='flex flex-col items-center'>
                        <p className='text-xl font-bold'>Cloudy</p>
                        <p className='text-xl font-bold'>35°C</p>
                    </div>
                    <BiCloud className='text-9xl' />
                </div>
                <p className='text-2xl font-semibold pt-10 md:text-4xl'>
                    {hariTeks},{' '}
                    <span>
                        {tgl} {bulanTeks}
                    </span>
                </p>
                <p className='text-7xl  font-semibold pt-10'>
                    {jam}.{menit}
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
