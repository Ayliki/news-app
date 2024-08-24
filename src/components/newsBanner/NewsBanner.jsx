import {formatDate} from '../../helpers/formatDate'
import cl from './styles.module.css'
import {formatTimeAgo} from '../../helpers/formatTimeAgo'
import Image from '../image/Image'

const NewsBanner = ({item}) =>{
    return(
        <div className={cl.banner}>
            <Image image={item?.image}/>
            <h3 className={cl.title}>{item.title}</h3>
            <p className={cl.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    ) 
}

export default NewsBanner 