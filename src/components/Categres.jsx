import React, { use } from 'react';

const categoryPromise = fetch('categories.json').then((res)=>res.json())

const Categres = () => {
    const category= use(categoryPromise);
    
    return (
        <div>
            <h2 className='font-bold'>All Category {category.length}</h2>
        </div>
    );
};

export default Categres;