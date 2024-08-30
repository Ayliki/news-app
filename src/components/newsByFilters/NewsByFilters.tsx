import NewsList from '../newsList/NewsList.tsx'
import { PAGE_SIZE, TOTAL_PAGES } from '../constants/constants.ts'
import cl from './styles.module.css'
import NewsFilters from '../newsFilters/NewsFilters'
import { useDebounce } from '../../helpers/hooks/useDebounce.ts'
import { useFetch } from '../../helpers/hooks/useFetch.ts'
import { getNews } from '../../api/apiNews.ts'
import { useFilters } from '../../helpers/hooks/useFilters.ts'
import PaginationWrapper from '../paginationWrapper/PaginationWrapper.tsx'
import { NewsApiResponse, ParamsType } from '../../interfaces/index.ts'

const NewsByFilters = () =>{

    const {filters, changeFilter} = useFilters({
        page_number: 1, 
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
     })

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const {data, isLoading} = useFetch<NewsApiResponse, ParamsType>(getNews,{
        ...filters,
        keywords: debouncedKeywords,
     } )

    const handleNextPage = () =>{
        if (filters.page_number > 1){
            changeFilter('page_number',filters.page_number - 1)
        }
    }

    const handlePreviousPage = () =>{
        if (filters.page_number < TOTAL_PAGES){
            changeFilter('page_number', filters.page_number + 1)
        }
    }

    const handlePageClick = (pageNumber: number) =>{
        changeFilter('page_number', pageNumber)
    }

    return(
        <section className={cl.section}>

            <NewsFilters filters={filters} changeFilter={changeFilter}/>

            <PaginationWrapper
                handleNextPage={handleNextPage} 
                top
                bottom
                handlePreviousPage={handlePreviousPage} 
                handlePageClick={handlePageClick}  
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            >
                <NewsList isLoading={isLoading} news={data?.news} />
            </PaginationWrapper>

        </section>
    )
}

export default NewsByFilters 