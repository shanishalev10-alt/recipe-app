import React, { useReducer } from "react";

const defaultRecipesState = [
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
];

const RecipesContext = React.createContext({
  recipes: defaultRecipesState,
  addRecipe: () => {},
  removeRecipe: () => {},
});

const recipesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      let updatedRecipes = [...state, action.recipe];
      return updatedRecipes;
    case "REMOVE":
    //remove functionality
    default:
      return defaultRecipesState;
  }
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

  return (
    <RecipesContext.Provider
      value={{
        recipes: recipeState,
        addRecipe,
        removeRecipe,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContext;
