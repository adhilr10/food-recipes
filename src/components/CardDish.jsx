import React, { useContext } from "react";
import { AllMenuContext } from "./AllMenusContext";
import { Link } from "react-router-dom";

const CardDish = ({ dishDetailsHandler, filterCategory }) => {
  const allMenus = useContext(AllMenuContext);
  const min_dish = 3;
  const trendingDishes = allMenus.map(
    ({ idMeal, strMealThumb, strMeal }, index) =>
      min_dish > index && (
        <Link
          to="/recipe"
          className="trending-dishes"
          key={index}
          onClick={() => dishDetailsHandler(idMeal)}
        >
          <img src={strMealThumb} alt="" />
          <h3>{strMeal}</h3>
        </Link>
      )
  );
  const dishFiltered = allMenus
    .filter((category) => {
      return category.strCategory === filterCategory;
    })
    .map(
      ({ strMealThumb, strMeal, idMeal }, index) =>
        min_dish > index && (
          <Link
            to="/recipe"
            className="trending-dishes"
            key={index}
            onClick={() => dishDetailsHandler(idMeal)}
          >
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
          </Link>
        )
    );
  return (
    <div className="trending">
      <div className="trending-section">
        {filterCategory ? <h2>{filterCategory}</h2> : <h2>Trending</h2>}
      </div>
      {filterCategory && dishFiltered.length === 0 ? (
        <h2 className="notAvailable">Sorry, this dish is not available</h2>
      ) : filterCategory ? (
        dishFiltered
      ) : (
        trendingDishes
      )}
    </div>
  );
};

export default CardDish;
