import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then((res)=>res.json())

const Categres = () => {
    const categories= use(categoryPromise);

    return (
        <div>
            <h2 className='font-bold'>All Category {categories.length}</h2>
            <div>
                {
                    categories.map((category)=>(
                        <NavLink 
                        to={`/category/${category.id}`}
                        className={'btn grid grid-cols-1 mt-5 gap-3 font-semibold text-accent border-0 bg-white hover:bg-base-200'}
                        key={category.id}>
                            {category.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categres;