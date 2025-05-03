import React, { Suspense } from 'react';
import Categres from '../Categres';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Categres></Categres>
            </Suspense>
        </div>
    );
};

export default LeftAside;