import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Componenets/Homelayout/NewsCard';

const Categorynews = () => {
    const {id}=useParams()
    const data=useLoaderData()

    const [categoryNews, setCategoryNews]=useState([])
    // console.log(data)
    useEffect(()=>{
        if(id=="0"){
            setCategoryNews(data)
            return
        }else if(id =="1"){
                const filteredNews=data.filter((news)=> news.others.is_today_pick == true);
                setCategoryNews(filteredNews)
        }else{
            const filteredNews=data.filter((news)=> news.category_id == id);
            setCategoryNews(filteredNews)
        }
        
    },[data,id])
    return (
        <div>
             <h1>Total  {categoryNews.length} news found</h1>

             <div>
                {
                    categoryNews.map((news)=> <NewsCard key={news.id} news={news}></NewsCard>)
                }
             </div>
        </div>
    );
};

export default Categorynews;