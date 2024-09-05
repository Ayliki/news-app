import { ForwardedRef, forwardRef } from 'react'
import cl from './styles.module.css'
import { CategoriesType } from '../../interfaces';

interface Props{
    categories: CategoriesType[];
    setSelectedCategory: (category: CategoriesType | null) => void;
    selectedCategory: CategoriesType | null;
}

const Categories =forwardRef(({categories, setSelectedCategory, selectedCategory} : Props, ref: ForwardedRef<HTMLDivElement>) =>{
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