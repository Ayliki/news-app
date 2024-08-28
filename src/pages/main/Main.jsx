import cl from './styles.module.css';
import { getNews } from '../../api/apiNews';
import {useDebounce} from '../../helpers/hooks/useDebounce'
import { PAGE_SIZE, TOTAL_PAGES } from '../../components/constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import LatestNews from '../../components/latestNews/LatestNews';
import NewsByFilters from '../../components/newsByFilters/NewsByFilters';

const Main = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1, 
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
     })

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const {data, isLoading} = useFetch(getNews,{
        ...filters,
        keywords: debouncedKeywords,
     } )

    return (
        <main className={cl.main}>
            <LatestNews isLoading={isLoading} banners={data && data.news}/>

            <NewsByFilters filters={filters} changeFilter={changeFilter} isLoading={isLoading} news={data?.news}/>

        </main>
    );
};

export default Main;
