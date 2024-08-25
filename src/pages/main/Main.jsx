import { useEffect, useState } from 'react';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import cl from './styles.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/newsList/NewsList';
import Skeleton from '../../components/skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews(currentPage, pageSize);
            setNews(response.news);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false); 
        }
    };

    useEffect(()=>{
        fetchNews(currentPage)
    },[currentPage])

    const handleNextPage = () =>{
        if (currentPage > 1){
            setCurrentPage(currentPage-1)
        }
    }

    const handlePreviousPage = () =>{
        if (currentPage < totalPages){
            setCurrentPage(currentPage+1)
        }
    }

    const handlePageClick = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }


    return (
        <main className={cl.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]} />
            ) : (
                <Skeleton type="banner" count={1} />
            )}
            <Pagination 
                handleNextPage={handleNextPage} 
                handlePreviousPage={handlePreviousPage} 
                handlePageClick={handlePageClick}  
                totalPages={totalPages}
                currentPage={currentPage}
            />
            {!isLoading ? (
                <NewsList news={news} />
            ) : (
                <Skeleton type="item" count={10} />
            )}
            <Pagination 
                handleNextPage={handleNextPage} 
                handlePreviousPage={handlePreviousPage} 
                handlePageClick={handlePageClick}  
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Main;
