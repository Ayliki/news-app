import {formatDate} from '../../helpers/formatDate'
import cl from './styles.module.css'

const Categories = ({categories, setSelectedCategory, selectedCategory}) =>{
    return(
        <div className={cl.categories}>
            {categories.map(category => {
                return (
                    <button 
                        className={selectedCategory === category ? cl.active : cl.item} 
                        onClick={()=>setSelectedCategory(category)}
                        key={category}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
} 

export default Categories