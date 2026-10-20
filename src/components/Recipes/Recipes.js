import { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Recipes.module.css";

const Recipes = (props) => {
  const content = props.recipes.map((recipe, index) => {
    return (
      <Card key={`recipe${index}`} className={styles.recipe}>
        <p className={styles.title}>{recipe.title}</p>
        {recipe.src && <img src={recipe.src} className={styles.img} alt="recipe image"/>}
        <div className={styles["main-content"]}>
          <div>
            {recipe.ingridiants.map((ingridiant, index) => (
              <p key={`ingridiant${index}`}>
                {index + 1}. {ingridiant}
              </p>
            ))}
          </div>
          <div>
            {recipe.instructions.map((instruction, index) => (
              <p key={`instruction${index}`}>
                {index + 1}. {instruction}
              </p>
            ))}
          </div>
        </div>
      </Card>
    );
  });

  return <div className={styles.recipes}>{content}</div>;
};
export default Recipes;
