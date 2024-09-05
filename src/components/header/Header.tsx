import { themeIcons } from '../../assets'
import {formatDate} from '../../helpers/formatDate'
import cl from './styles.module.css'
import { useTheme } from '../context/ThemeContext'

const Header = () =>{
    const {isDark, toggleTheme} = useTheme()
    return(
        <header className={`${cl.header} ${isDark ? cl.dark : cl.light}`}>
            <div className={cl.info}>
               <h1 className={cl.title}>
                News Reactify
                </h1 >
                <p className={cl.data}>{formatDate(new Date())}</p>  
            </div>
            <img src={isDark? themeIcons.light : themeIcons.dark} width={30} alt='theme' onClick={toggleTheme}/>
        </header>
    )
}

export default Header