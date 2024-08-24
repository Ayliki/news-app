import {formatDate} from '../../helpers/formatDate'
import cl from './styles.module.css'
import {formatTimeAgo} from '../../helpers/formatTimeAgo'
import NewsElement from '../newsElement/newsElement'

const NewsList = ({news}) =>{
    return(
        <ul className={cl.list}>
            {news.map(item=>{
                return <NewsElement key={item.id} item={item}/>
            })}
        </ul>
    ) 
}

export default NewsList 