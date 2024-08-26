import cl from './styles.module.css'

const Search = ({keywords, setKeywords}) =>{
    return(
        <div className={cl.search}>
            <input 
                type="text" 
                value={keywords} 
                className={cl.input} 
                onChange={(e)=>setKeywords(e.target.value)}
                placeholder='Search...'
            />
        </div>
    )
}

export default Search 