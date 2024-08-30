import cl from './styles.module.css'

interface Props{
    image: string
}

const Image = ({image}: Props) =>{
    return(
        <div className={cl.wrapper}>
            {image ? <img src={image} alt='news' className={cl.image}/> : null}
        </div> 
    ) 
}

export default Image