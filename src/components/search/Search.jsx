import cl from './styles.module.css'

const Search = ({keyWords, setKeyWords}) =>{
    return(
        <div className={cl.search}>
            <input 
                type="text" 
                value={keyWords} 
                className={cl.input} 
                onChange={(e)=>setKeyWords(e.target.value)}
                placeholder='Javascript'
            />
        </div>
    )
}

export default Search 