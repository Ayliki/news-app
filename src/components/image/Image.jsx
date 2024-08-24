import {formatDate} from '../../helpers/formatDate'
import cl from './styles.module.css'
import {formatTimeAgo} from '../../helpers/formatTimeAgo'

const Image = ({image}) =>{
    return(
        <div className={cl.wrapper}>
            {image ? <img src={image} alt='news' className={cl.image}/> : null}
        </div> 
    ) 
}

export default Image