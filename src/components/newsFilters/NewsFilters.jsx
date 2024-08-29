import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../search/Search';
import cl from './styles.module.css'

const NewsFilters = ({filters, changeFilter}) =>{
    const {data: dataCategories} = useFetch(getCategories);

    return(
        <div className={cl.filters}>
            {dataCategories ? (
                <Categories 
                    categories={["All", ...dataCategories.categories]} 
                    setSelectedCategory={(category) => changeFilter('category', category)}
                    selectedCategory={filters.category }
                />
            )
                : null
            }

            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
        </div>
    )
}

export default NewsFilters 