// import { el } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();
    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        }
        else if (id == '1') {
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filterNews);
        }
        else {
            const filterNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filterNews)
        }

    }, [data, id])
    return (
        <div>
            <h2 className='font-bold'>Total <span className='text-secondary'>{categoryNews.length}</span> Found News</h2>
            <div className='grid grid-cols-1 gap-3'>
                {
                    categoryNews.map((news)=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;