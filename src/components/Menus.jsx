import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SearchDishes from "./SearchDishes";
import FilteredDishes from "./FilteredDishes";
import { AllMenus } from "./AllMenusContext";
import RecipeDetails from "./RecipeDetails";
import Searched from "./Searched";

const Menus = () => {
  const [dishId, setDishId] = useState();
  const dishDetailsHandler = (idMeal) => {
    setDishId(idMeal);
  };
  return (
    <Fragment>
      <Router>
        <Header />
        <SearchDishes />
        <AllMenus>
          <Routes>
            <Route
              path="/"
              element={
                <FilteredDishes dishDetailsHandler={dishDetailsHandler} />
              }
            />
            <Route path="recipe/" element={<RecipeDetails dishId={dishId} />} />
            <Route path="searched/" element={<Searched />} />
          </Routes>
        </AllMenus>
      </Router>
    </Fragment>
  );
};

export default Menus;
