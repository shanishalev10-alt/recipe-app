import { useReducer, useEffect } from "react";

const defaultRecipesState = {
  recipes: [
    {
      id: "r1",
      title: "cake",
      ingridiants: ["flour", "eggs", "oil", "suger", "chocolate"],
      instructions: ["Mix in a bowl.", " 30 min in oven."],
    },
    {
      id: "r2",
      title: "cookies",
      ingridiants: ["flour", "eggs", "oil", "suger", "chocolate"],
      instructions: ["Mix in a bowl.", " 30 min in oven."],
    },
    {
      id: "r3",
      title: "brownies",
      ingridiants: ["flour", "eggs", "oil", "suger", "chocolate", "butter"],
      instructions: ["Mix in a bowl.", " 30 min in oven."],
    },
  ],
};

const recipesReducer = (state, action) => {
  if (action.type === "ADD") {
    //add functionality
    let updatedRecipes = [
      ...state.recipes,
      { id: `r${state.recipes.length + 1}`, ...action.recipe },
    ];

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    return {
      recipes: updatedRecipes,
    };
  } else if (action.type === "REMOVE") {
    //remove functionality
    let updatedRecipes = state.recipes.filter(
      (recipe) => recipe.id !== action.identifier,
    );

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    return { recipes: updatedRecipes };
  } else if (action.type === "EDIT") {
    //edit functionality
    let updatedRecipes = state.recipes;
    let newRecipeIndex = state.recipes.findIndex(
      (recipe) => recipe.id === action.newRecipe.id,
    );

    updatedRecipes.splice(newRecipeIndex, 1, action.newRecipe);

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    return { recipes: updatedRecipes };
  } else if (action.type === "FETCH") {
    console.log("in fetch");
    console.log(action.recipes);
    return { recipes: action.recipes };
  }

  return defaultRecipesState;
};

const useRecipes = () => {
  const [recipeState, dispatchRecipesAction] = useReducer(
    recipesReducer,
    defaultRecipesState,
  );

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes"));

    if (storedRecipes) {
      dispatchRecipesAction({ type: "FETCH", recipes: storedRecipes });
    }
  }, []);

  const addRecipe = (recipe) => {
    dispatchRecipesAction({ type: "ADD", recipe });
  };

  const removeRecipe = (identifier) => {
    dispatchRecipesAction({ type: "REMOVE", identifier });
  };

  const editRecipe = (newRecipe) => {
    dispatchRecipesAction({ type: "EDIT", newRecipe });
  };

  return {
    recipes: recipeState.recipes,
    addRecipe: addRecipe,
    editRecipe: editRecipe,
    removeRecipe: removeRecipe,
  };
};

export default useRecipes;
