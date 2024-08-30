import cl from './styles.module.css';
import LatestNews from '../../components/latestNews/LatestNews.tsx';
import NewsByFilters from '../../components/newsByFilters/NewsByFilters.tsx';

const Main = () => {
    return (
        <main className={cl.main}>
            <LatestNews />

            <NewsByFilters />

        </main>
    );
};

export default Main;
