import { forwardRef } from 'react'
import cl from './styles.module.css'

const Categories =forwardRef(({categories, setSelectedCategory, selectedCategory}, ref) =>{
    return(
        <div ref={ref} className={cl.categories}>
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
}); 

Categories.displayName = 'Categories'

export default Categories