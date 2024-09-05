import { IFilters } from "../../interfaces/index.ts";
import { useAppDispatch } from "../../store/index.ts";
import { useGetCategoriesQuery } from "../../store/services/newsApi.ts";
import { setFilters } from "../../store/slices/newsSlice.ts";
import Categories from "../Categories/Categories.tsx";
import { useTheme } from "../context/ThemeContext.tsx";
import Search from "../search/Search.tsx";
import Slider from "../slider/Slider.tsx"; 
import cl from "./styles.module.css";

interface Props{
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const {isDark} = useTheme();

  const {data} = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch()

  return (
    <div className={cl.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={["All", ...data.categories]}
            setSelectedCategory={(category) =>
              dispatch(setFilters({key: "category", value: category }))
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>  dispatch(setFilters({key: "keywords", value: keywords }))}
      />
    </div>
  );
};

export default NewsFilters;
