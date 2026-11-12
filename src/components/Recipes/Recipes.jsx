import Recipe from "../Recipe/Recipe";
import styles from "./Recipes.module.css";

const Recipes = ({ recipes }) => {
  const recipesElements = recipes.map((recipe, index) => {
    return (
      <Recipe
        src={recipe.src}
        title={recipe.title}
        ingridiants={recipe.ingridiants}
        instructions={recipe.instructions}
        key={`recipe${index}`}
      />
    );
  });

  return <div className={styles.recipes}>{recipesElements}</div>;
};

export default Recipes;