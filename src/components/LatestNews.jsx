import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-2 gap-3'>
            <p className='text-base-100 py-2 px-3 bg-secondary'>Latest</p>
            <Marquee className='flex gap-5 font-bold' pauseOnHover={true} speed={80}>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....</p>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....</p>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;