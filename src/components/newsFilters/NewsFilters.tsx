import { getCategories } from "../../api/apiNews.ts";
import { useFetch } from "../../helpers/hooks/useFetch.ts";
import { CategoriesApiResponse, IFilters } from "../../interfaces/index.ts";
import Categories from "../Categories/Categories.tsx";
import Search from "../search/Search.tsx";
import Slider from "../slider/Slider.tsx";
import cl from "./styles.module.css";

interface Props{
  filters: IFilters;
  changeFilter: (key: string, value: string | null | number) => void
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);

  return (
    <div className={cl.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={["All", ...dataCategories.categories]}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
