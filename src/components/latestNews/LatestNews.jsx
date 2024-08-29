import { getLatestNews } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import BannersList from '../bannersList/BannersList'
import cl from './styles.module.css'

const LatestNews = () =>{


    const {data, isLoading} = useFetch(getLatestNews)

    return(
        <section className={cl.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews 