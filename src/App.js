import { useState } from "react";

import AddRecipe from "./components/AddRecipe/AddRecipe";
import Recipes from "./components/Recipes/Recipes";
import styles from "./App.module.css";

function App() {
  const [recipes, setRecipes] = useState([
    {
      title: "cake",
      ingridiants: ["flour", "eggs", "oil", "suger", "chocolate"],
      instructions: ["Mix in a bowl.", " 30 min in oven."],
    },
    {
      title: "cookies",
      ingridiants: ["flour", "eggs", "oil", "suger", "chocolate"],
      instructions: ["Mix in a bowl.", " 30 min in oven."],
    },
    {
      title: "brownies",
      ingridiants: ["flour", "eggs", "oil", "suger", "chocolate", "butter"],
      instructions: ["Mix in a bowl.", " 30 min in oven."],
    },
  ]);

  const addRecipeHandler = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Start Cooking Your Favorite Food!</h1>
      <AddRecipe onAddRecipe={addRecipeHandler} />
      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
