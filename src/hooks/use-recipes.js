import { useContext } from "react";
import RecipesContext from "../store/recipes-context";

const useRecipes = () => {
  const recipeCtx = useContext(RecipesContext);
  return {
    resipes: recipeCtx.recipes,
    addRecipe: recipeCtx.addRecipe,
    editRecipe: recipeCtx.editRecipe,
    removeRecipe: recipeCtx.removeRecipe,
  };
};

export default useRecipes;
