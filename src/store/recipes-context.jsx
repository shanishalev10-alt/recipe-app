import React, { useReducer } from "react";

const RecipesContext = React.createContext({
  recipes: [],
  addRecipe: () => {},
  editRecipe: () => {},
  removeRecipe: () => {},
});

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
      { id: `r${state.recipes.length}`, ...action.recipe },
    ];

    return {
      recipes: updatedRecipes,
    };
  } else if (action.type === "REMOVE") {
    console.log("in remove");
    //remove functionality
    let updatedRecipes = state.recipes.filter(
      (recipe) => recipe.id !== action.identifier,
    );

    return { recipes: updatedRecipes };
  } else if (action.type === "EDIT") {
    //edit functionality
    let updatedRecipes = state.recipes;
    let newRecipeIndex = state.recipes.findIndex(
      (recipe) => recipe.id === action.newRecipe.id,
    );

    updatedRecipes.splice(newRecipeIndex, 1, action.newRecipe);

    return { recipes: updatedRecipes };
  }

  return defaultRecipesState;
};

export const RecipesContextProvider = (props) => {
  const [recipeState, dispatchRecipesAction] = useReducer(
    recipesReducer,
    defaultRecipesState,
  );

  const addRecipe = (recipe) => {
    dispatchRecipesAction({ type: "ADD", recipe });
  };

  const removeRecipe = (identifier) => {
    dispatchRecipesAction({ type: "REMOVE", identifier });
  };

  const editRecipe = (newRecipe) => {
    dispatchRecipesAction({ type: "EDIT", newRecipe });
  };

  return (
    <RecipesContext.Provider
      value={{
        recipes: recipeState.recipes,
        addRecipe,
        editRecipe,
        removeRecipe,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
