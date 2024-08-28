import BannersList from '../bannersList/BannersList'
import cl from './styles.module.css'

const LatestNews = ({banners, isLoading}) =>{
    return(
        <section className={cl.section}>
            <BannersList banners={banners} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews 