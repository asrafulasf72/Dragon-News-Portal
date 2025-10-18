import React from 'react';
import { NavLink } from 'react-router';

const CategoryNavlink = ({cate}) => {
    const {name,id}=cate
    return (
        <div className='pl-3 mt-2'>
              <NavLink className={'text-accent text-[1rem] font-[400px]'} to={`/category/${id}`}>{name}</NavLink>
        </div>
    );
};

export default CategoryNavlink;