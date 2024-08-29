import cl from './styles.module.css';
import LatestNews from '../../components/latestNews/LatestNews';
import NewsByFilters from '../../components/newsByFilters/NewsByFilters';

const Main = () => {
    return (
        <main className={cl.main}>
            <LatestNews />

            <NewsByFilters />

        </main>
    );
};

export default Main;
