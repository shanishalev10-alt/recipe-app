import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecipesContextProvider } from "./store/recipes-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RecipesContextProvider>
      <App />
    </RecipesContextProvider>
);
