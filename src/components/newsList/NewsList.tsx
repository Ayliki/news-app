import cl from './styles.module.css'
import NewsElement from '../newsElement/newsElement'
import withSkeleton from '../../helpers/hocs/withSkeleton'
import { INews } from '../../interfaces'

interface Props{
    news?: INews[]
}

const NewsList = ({news}: Props) =>{
    return(
        <ul className={cl.list}>
            {news?.map(item=>{
                return <NewsElement key={item.id} item={item}/>
            })}
        </ul>
    ) 
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton; 