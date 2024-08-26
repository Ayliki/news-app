import cl from './styles.module.css'
import {formatTimeAgo} from '../../helpers/formatTimeAgo'
import Image from '../image/Image'
import withSkeleton from '../../helpers/hocs/withSkeleton'

const NewsBanner = ({item}) =>{
    return(
        <div className={cl.banner}>
            <Image image={item?.image}/>
            <h3 className={cl.title}>{item.title}</h3>
            <p className={cl.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    ) 
}

const NewsBannerSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerSkeleton; 