import cl from './styles.module.css'
import withSkeleton from '../../helpers/hocs/withSkeleton'
import NewsBanner from '../newsBanner/NewsBanner'
import { INews } from '../../interfaces'

interface Props {
    banners?: INews[] | null
}

const BannersList = ({banners}: Props) =>{
    return(
        <ul className={cl.banners}>
            {banners?.map(banner=>{
                return (
                    <NewsBanner key={banner.id} item={banner}/>
                )
            })}
        </ul>
    )  
}

const BannersListsSkeleton = withSkeleton<Props>(BannersList, 'banner', 10, 'row');

export default BannersListsSkeleton; 