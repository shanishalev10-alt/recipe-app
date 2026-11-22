import React from "react";
import useRecipes from "../hooks/use-recipes";

const RecipesContext = React.createContext({
  recipes: [],
  addRecipe: (recipe) => {},
  editRecipe: (newRecipe) => {},
  removeRecipe: (identifier) => {},
});

export const RecipesContextProvider = (props) => {
  const recipesObj = useRecipes();

  return (
    <RecipesContext.Provider value={recipesObj}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
