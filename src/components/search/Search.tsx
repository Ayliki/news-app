import cl from './styles.module.css'

interface Props{
    keywords: string;
    setKeywords: (keywords: string) => void
}

const Search = ({keywords, setKeywords}: Props) =>{
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