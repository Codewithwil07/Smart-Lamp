import Lamp from '../assets/image/Lamp.png';
const Intencity = () => {
    <script src='/socket.io/socket.io.js'></script>;

    function handleValue(e) {
        let data = e.target.value;
        document.getElementById('rangeValue').innerHTML = data + '%';
        console.log(data);
        fetch('http://localhost:3000/arduinoApi', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return (
        <div className='flex gap-10 p-5 cursor-pointer flex-col items-center rounded-xl bg-gradient-to-r from-amber-200 to-yellow-500 shadow-md'>
            <div className='flex flex-col gap-5'>
                <img
                    src={Lamp}
                    alt=''
                    className='w-80 relative bottom-7 left-0 md:left-20'
                />
                <input
                    type='range'
                    className='range w-full md:w-[30rem]'
                    min={'2'}
                    max={'255'}
                    id='slider'
                    onChange={handleValue}
                />
                <span
                    id='rangeValue'
                    className='font-bold text-center text-2xl'
                    onInput={handleValue}
                >50%</span>
            </div>
        </div>
    );
};

export default Intencity;
