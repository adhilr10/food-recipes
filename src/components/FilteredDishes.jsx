import { useEffect, useState, useSyncExternalStore } from "react";
import CardDish from "./CardDish";

const FilteredDishes = ({ dishDetailsHandler }) => {
  const [menuCategory, setMenuCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState();
  const getAllCategories = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const response = await fetch(API_URL);
    const categoryData = await response.json();
    setMenuCategory(categoryData.categories);
  };
  const filterDishesHandler = (strCategory) => {
    setFilterCategory(strCategory);
  };
  const min_category = 4;
  const filteredEmoji = ["🥩", "🍗", "🍰", "🍖"];
  const filteredDishesAre = menuCategory.map(
    ({ idCategory, strCategory }, index) =>
      min_category > index && (
        <ul className="filter-button" key={idCategory}>
          <li onClick={() => filterDishesHandler(strCategory)}>
            <i className="filter-icon">{filteredEmoji[index]}</i>
            <span>{strCategory}</span>
          </li>
        </ul>
      )
  );
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div>
      <div className="filtered-dishes">{filteredDishesAre}</div>
      <CardDish
        filterCategory={filterCategory}
        dishDetailsHandler={dishDetailsHandler}
      />
    </div>
  );
};

export default FilteredDishes;
