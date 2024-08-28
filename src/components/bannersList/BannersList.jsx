import cl from './styles.module.css'
import withSkeleton from '../../helpers/hocs/withSkeleton'
import NewsBanner from '../newsBanner/NewsBanner'

const BannersList = ({banners}) =>{
    return(
        <ul className={cl.banners}>
            {banners.map(banner=>{
                return (
                    <NewsBanner key={banner.id} item={banner}/>
                )
            })}
        </ul>
    )  
}

const BannersListsSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');

export default BannersListsSkeleton; 