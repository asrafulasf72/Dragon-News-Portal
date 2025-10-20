import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {title,image_url,details,category_id}=news;
    
    return (
        <div className='space-y-4'>
             <img className='w-full h-[450px] object-cover' src={image_url} alt="" />
            <h1 className='text-[1.6rem] font-medium'>{title}</h1>
            <p className='text-1rem] text-accent'>{details}</p>

            <Link className='px-3 py-1.5 bg-secondary text-white text-[1rem] font-medium' to={`/category/${category_id}`}> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;