import React, { useReducer } from "react";

const RecipesContext = React.createContext({
  recipes: [],
  addRecipe: () => {},
  removeRecipe: () => {},
});

const defaultRecipesState = {
  recipes: [
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
  ],
};

const recipesReducer = (state, action) => {
  if (action.type === "ADD") {
    //add functionality
    let updatedRecipes = [...state.recipes, action.recipe];
    return {
      recipes: updatedRecipes,
    };
  } else if ((action.type = "REMOVE")) {
    //remove functionality
  }

  return defaultRecipesState;
};

export const RecipesContextProvider = (props) => {
  const [recipeState, dispatchRecipesAction] = useReducer(
    recipesReducer,
    defaultRecipesState,
  );

  const addRecipe = (recipe) => {
    dispatchRecipesAction({type: 'ADD', recipe})
  };

  const removeRecipe = (identifier) => {
    dispatchRecipesAction({type: 'REMOVE', identifier})
  };

  return (
    <RecipesContext.Provider
      value={{
        recipes: recipeState.recipes,
        addRecipe,
        removeRecipe,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
