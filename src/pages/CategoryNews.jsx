import { el } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            category{categoryNews.length}
        </div>
    );
};

export default CategoryNews;