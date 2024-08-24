import {formatDate} from '../../helpers/formatDate'
import cl from './styles.module.css'

const Header = () =>{
    return(
        <header className={cl.header}>
            <h1 className={cl.title}>
                News Reactify
            </h1 >
            <p className={cl.data}>{formatDate(new Date())}</p>
        </header>
    )
}

export default Header