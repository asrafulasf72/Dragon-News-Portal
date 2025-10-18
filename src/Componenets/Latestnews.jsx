import React from 'react';
import Marquee from 'react-fast-marquee';

const Latestnews = () => {
    return (
        <div className='flex items-center gap-2 bg-base-300 p-2'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-2' pauseOnHover={true} speed={50}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus, vel eos eius dicta necessitatibus libero quidem blanditiis odit et aut deserunt, laudantium ducimus tenetur voluptatum, corporis asperiores? Nobis, quasi provident, dolores officiis quod dolorem magnam repellendus cumque distinctio, doloribus fugiat voluptates reprehenderit! Architecto voluptates id, distinctio animi dignissimos nihil.</p>
            </Marquee>
        </div>
    );
};

export default Latestnews;