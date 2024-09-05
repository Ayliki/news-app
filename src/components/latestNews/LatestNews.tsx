import { useGetLatestNewsQuery } from '../../store/services/newsApi.ts'
import BannersList from '../bannersList/BannersList.tsx'
import cl from './styles.module.css'

const LatestNews = () => {

    const {data, isLoading} = useGetLatestNewsQuery(null)
    return (
        <section className={cl.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews 