import { useEffect, useState } from 'react'
import NewsBanner from '../../components/newsBanner/NewsBanner'
import cl from './styles.module.css'
import {getNews} from '../../api/apiNews'
import NewsList from '../../components/newsList/NewsList'

const Main = () =>{
    const  [news, setNews] = useState([]);
    useEffect(()=>{
        const fetchNews = async()=>{
            try{
                const response = await getNews()
                setNews(response.news)
            }catch(error){
                console.error(error);
            }
        }
        fetchNews()
    })

    return(
        <main className={cl.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}
            <NewsList news = {news}/>
        </main>
    )
}

export default Main