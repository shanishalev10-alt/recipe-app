import { useState } from "react";
import List from "../List/List";
import Card from "../UI/Card/Card";
import styles from "./Recipe.module.css";
import AddRecipe from "../AddRecipe/AddRecipe";

const Recipe = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const switchEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      {!isEditing && (
        <li >
          <Card className={styles.recipe}>
            <div className={`${styles.actions}`}>
              <button
                className={`${styles.action} ${styles.edit}`}
                onClick={switchEditingHandler}
              ></button>
              <button
                className={`${styles.action} ${styles.trash}`}
                onClick={props.onDelete}
              ></button>
            </div>
            <p className={styles.title}>{props.title}</p>
            {props.src && (
              <img src={props.src} className={styles.img} alt="dish" />
            )}
            <div className={styles["main-content"]}>
              <div>
                <List list={props.ingridiants} name="ingridiant" />
              </div>
              <div>
                <List list={props.instructions} name="instruction" />
              </div>
            </div>
          </Card>
        </li>
      )}
      {isEditing && (
        <AddRecipe
          title={props.title}
          instructions={props.instructions}
          ingridiants={props.ingridiants}
          src={props.src}
          id={props.id}
          onSwitchEditing={switchEditingHandler}
        />
      )}
    </>
  );
};

export default Recipe;
