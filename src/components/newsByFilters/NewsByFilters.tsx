import NewsList from '../newsList/NewsList.tsx'
import { TOTAL_PAGES } from '../constants/constants.ts'
import cl from './styles.module.css'
import NewsFilters from '../newsFilters/NewsFilters'
import { useDebounce } from '../../helpers/hooks/useDebounce.ts'
import PaginationWrapper from '../paginationWrapper/PaginationWrapper.tsx'
import {useGetNewsQuery} from '../../store/services/newsApi.ts' 
import { useAppDispatch, useAppSelector } from '../../store/index.ts'
import { setFilters } from '../../store/slices/newsSlice.ts'

const NewsByFilters = () =>{
    const dispatch = useAppDispatch()

    const filters = useAppSelector(state => state.news.filters)
    const news = useAppSelector(state => state.news.news)

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { isLoading} = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords,
    })

    const handleNextPage = () =>{
        if (filters.page_number > 1){
            dispatch(setFilters({key: "page_number", value: filters.page_number + 1}))
        }
    }

    const handlePreviousPage = () =>{
        if (filters.page_number < TOTAL_PAGES){
            dispatch(setFilters({key: "page_number", value: filters.page_number - 1}))
        }
    }

    const handlePageClick = (pageNumber: number) =>{
        dispatch(setFilters({key: "page_number", value: pageNumber }))
    }

    return(
        <section className={cl.section}>

            <NewsFilters filters={filters}/>

            <PaginationWrapper
                handleNextPage={handleNextPage} 
                top
                bottom
                handlePreviousPage={handlePreviousPage} 
                handlePageClick={handlePageClick}  
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            >
                <NewsList isLoading={isLoading} news={news} />
            </PaginationWrapper>

        </section>
    )
}

export default NewsByFilters 