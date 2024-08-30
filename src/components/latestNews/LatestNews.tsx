import { getLatestNews } from '../../api/apiNews.ts'
import { useFetch } from '../../helpers/hooks/useFetch.ts'
import {NewsApiResponse } from '../../interfaces/index.ts'
import BannersList from '../bannersList/BannersList.tsx'
import cl from './styles.module.css'

const LatestNews = () => {

    const { data , isLoading } = useFetch<NewsApiResponse, null>(getLatestNews)

    return (
        <section className={cl.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews 