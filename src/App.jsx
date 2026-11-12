import AddRecipe from "./components/AddRecipe/AddRecipe";
import Recipes from "./components/Recipes/Recipes";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Start Cooking Your Favorite Food!</h1>
      <AddRecipe />
      <Recipes />
    </div>
  );
}

export default App;
