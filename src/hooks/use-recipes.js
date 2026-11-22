import { useReducer, useEffect } from "react";

const defaultRecipesState = [
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
];

const initializeReducer = () => {
  return JSON.parse(localStorage.getItem("recipes"));
};

const recipesReducer = (state, action) => {
  let recipes;
  switch (action.type) {
    case "ADD":
      //add functionality
      recipes = [
        ...state,
        {
          id: `r${+state[state.length - 1].id.replace("r", "") + 1}`,
          ...action.payload,
        },
      ];

      localStorage.setItem("recipes", JSON.stringify(recipes));
      break;
    case "REMOVE":
      //remove functionality
      recipes = state.filter((recipe) => recipe.id !== action.payload);

      localStorage.setItem("recipes", JSON.stringify(recipes));
      break;

    case "EDIT":
      //edit functionality
      recipes = [...state];
      let newRecipeIndex = state.findIndex(
        (recipe) => recipe.id === action.payload.id,
      );

      recipes.splice(newRecipeIndex, 1, action.payload);

      localStorage.setItem("recipes", JSON.stringify(recipes));
      break;
    default:
      recipes = defaultRecipesState;
  }

  return recipes;
};

const useRecipes = () => {
  const [recipeState, dispatchRecipesAction] = useReducer(
    recipesReducer,
    defaultRecipesState,
    initializeReducer,
  );

  const addRecipe = (recipe) => {
    dispatchRecipesAction({ type: "ADD", payload: recipe });
  };

  const removeRecipe = (identifier) => {
    dispatchRecipesAction({ type: "REMOVE", payload: identifier });
  };

  const editRecipe = (newRecipe) => {
    dispatchRecipesAction({ type: "EDIT", payload: newRecipe });
  };

  return {
    recipes: recipeState,
    addRecipe,
    editRecipe,
    removeRecipe,
  };
};

export default useRecipes;
