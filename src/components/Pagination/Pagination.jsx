import cl from './styles.module.css'

const Pagination = ({totalPages, handleNextPage, currentPage, handlePreviousPage, handlePageClick}) =>{
    return(
        <div className={cl.pagination}>
            <button 
                className={cl.arrow}
                disabled={currentPage<=1}
                onClick={handleNextPage} 
            >
                {'<'}
            </button>
            <div className={cl.list}>
                {[...Array(totalPages)].map((_, index)=>{
                    return (
                        <button 
                            className={cl.pageNumber} 
                            onClick={()=>handlePageClick(index + 1)} 
                            disabled={index + 1 === currentPage}
                            key={index} 
                        >
                            {index +1}
                        </button>
                        )
                })}
            </div>
            <button 
                className={cl.arrow} 
                onClick={handlePreviousPage}
                disabled={currentPage>=totalPages}
            >
                {'>'}
            </button>
        </div>
    )
}

export default Pagination