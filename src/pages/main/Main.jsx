import { useEffect, useState } from 'react';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import cl from './styles.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/newsList/NewsList';
import Skeleton from '../../components/skeleton/Skeleton';

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const response = await getNews();
                setNews(response.news);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false); 
            }
        };
        fetchNews();
    }, []); 

    return (
        <main className={cl.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type="banner" count={1} />
            )}
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton type="item" count={10} />
            )}
        </main>
    );
};

export default Main;
