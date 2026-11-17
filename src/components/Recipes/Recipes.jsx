import { useContext } from "react";
import RecipesContext from "../../store/recipes-context";
import Recipe from "../Recipe/Recipe";
import styles from "./Recipes.module.css";

const Recipes = () => {
  const recipeCtx = useContext(RecipesContext);

  const recipesElements = recipeCtx.recipes.map((recipe) => {
    return (
      <Recipe
        src={recipe.src}
        title={recipe.title}
        ingridiants={recipe.ingridiants}
        instructions={recipe.instructions}
        id={recipe.id}
        onDelete={() => {
          console.log(recipe.id)
          recipeCtx.removeRecipe(recipe.id);
        }}
        key={recipe.id}
      />
    );
  });

  return <div className={styles.recipes}>{recipesElements}</div>;
};

export default Recipes;
