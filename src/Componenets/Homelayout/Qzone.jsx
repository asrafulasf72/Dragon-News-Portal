import React from 'react';
import qzone1 from '../../assets/swimming.png'
import qzone2 from '../../assets/class.png'
import qzone3 from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 mt-5 p-2'>
            <h1 className='text-[1.2rem] font-[600px]'>Q-Zone</h1>

            <div className='flex flex-col justify-center'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;