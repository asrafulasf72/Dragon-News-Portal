import React, { useEffect, useState } from 'react';
import Header from '../Componenets/Header';
import RightAside from '../Componenets/Homelayout/RightAside';
import NewsDetailsCard from '../Componenets/Homelayout/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data =useLoaderData();
    const {id}=useParams();

    const [news, setNews]=useState({})

    useEffect(()=>{
        const newsDetils=data.find((singleNews)=> singleNews.id==id)
        setNews(newsDetils)
    },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 py-5 gap-3'>
                <section className='col-span-9'>
                       <h1 className='text-[1rem] font-medium my-3'>Dragon News</h1>
                       <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;