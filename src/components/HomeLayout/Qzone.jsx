import React from 'react';
import  swimming  from '../../assets/swimming.png'
import  classimg from'../../assets/class.png'
import  playgrond from  '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Q Zone</h2>
            <div>
                <img src={swimming } alt="" />
                <img src={classimg} alt="" />
                <img src={playgrond} alt="" />
            </div>
        </div>
    );
};

export default Qzone;