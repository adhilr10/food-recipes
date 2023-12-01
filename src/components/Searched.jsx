import { useContext } from "react";
import { AllMenuContext } from "./AllMenusContext";
const Searched = () => {
  const allMenus = useContext(AllMenuContext);
  const SearchedDishes = allMenus.map(({ strMealThumb, strMeal }, index) => (
    <div key={index} className="card">
      <img src={strMealThumb} alt="" />
      <h3 className="card-content">{strMeal}</h3>
    </div>
  ));
  return (
    <div>
      <h2 className="notAvailable">
        The search bar is placed to make the website looking like a Wow😉
      </h2>
      <div className="card-container">
      {SearchedDishes}
      </div>
    </div>
    
  );
};

export default Searched;

