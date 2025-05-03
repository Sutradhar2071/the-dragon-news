import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold'>Find Us On</h2>
            <div className='join join-vertical w-full'>
                <button className='btn bg-base-100 justify-start'><FaFacebook size={25} />FaceBook</button>
                <button className='btn bg-base-100 justify-start'><FaTwitter size={25} />Twitter</button>
                <button className='btn bg-base-100 justify-start'><FaInstagram size={25} />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;