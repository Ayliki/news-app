import cl from './styles.module.css'
import NewsElement from '../newsElement/newsElement'
import withSkeleton from '../../helpers/hocs/withSkeleton'

const NewsList = ({news}) =>{
    return(
        <ul className={cl.list}>
            {news.map(item=>{
                return <NewsElement key={item.id} item={item}/>
            })}
        </ul>
    ) 
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton; 