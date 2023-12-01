import React, { useContext, useEffect, useState } from "react";
import { AllMenuContext } from "./AllMenusContext";
let i;
const RecipeDetails = ({ dishId }) => {
  const allMenus = useContext(AllMenuContext);
  const [instruction, setInstruction] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [firstInstr, setFirstInstr] = useState(true);

  const updateHandler = (strInstructions, strIngredients) => {
    setInstruction(strInstructions);
    setIngredient(strIngredients);
    setFirstInstr(false);
  };

  const allRecipes = allMenus
    .filter(({ idMeal }) => idMeal === dishId)
    .map(
      (
        {
          strMealThumb,
          strMeal,
          strCategory,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
        },
        index
      ) => (
        <div key={index} className="recipe-details">
          <div className="title-image">
            <h3>
              {strMeal} <span>{"(" + strCategory + ")"}</span>
            </h3>

            <img src={strMealThumb} alt="" />
          </div>
          <div className="instruction-ingredients">
            <div className="">
              <button
                className={
                  instruction === strInstructions || firstInstr
                    ? "active"
                    : "details-btn"
                }
                onClick={() => updateHandler(strInstructions, [])}
              >
                Instructions
              </button>
              <button
                className={
                  ingredient[0] === strIngredient1 ? "active" : "details-btn"
                }
                onClick={() =>
                  updateHandler("", [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                    strIngredient6,
                    strIngredient7,
                    strIngredient8,
                    strIngredient9,
                    strIngredient10,
                  ])
                }
              >
                Ingredients
              </button>
            </div>
            {firstInstr && <h4>{strInstructions}</h4>}
            {instruction && !firstInstr ? (
              <h4>{instruction}</h4>
            ) : (
              <ol>
                {ingredient
                  .filter((item) => isNaN(item))
                  .map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
              </ol>
            )}
          </div>
        </div>
      )
    );

  return <div className="recipe-details-container">{allRecipes}</div>;
};

export default RecipeDetails;
