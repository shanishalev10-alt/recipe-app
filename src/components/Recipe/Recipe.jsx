import { useState } from "react";
import List from "../List/List";
import Card from "../UI/Card/Card";
import styles from "./Recipe.module.css";
import AddRecipe from "../AddRecipe/AddRecipe";
import ConfirmModul from "../UI/ConfirmModul/ConfirmModul";

const Recipe = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const switchEditingHandler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      {isConfirming && (
        <ConfirmModul
          onConfirm={props.onDelete}
          onCancel={() => {
            setIsConfirming(false);
          }}
          title="Delete recipe?"
          text="The Recipe wil be permanently deleted"
        />
      )}
      {isEditing ? (
        <AddRecipe
          title={props.title}
          instructions={props.instructions}
          ingridiants={props.ingridiants}
          src={props.src}
          id={props.id}
          onSwitchEditing={switchEditingHandler}
        />
      ) : (
        <Card className={styles.recipe}>
          <div className={`${styles.actions}`}>
            <button
              className={`${styles.action} ${styles.edit}`}
              onClick={switchEditingHandler}
            />
            <button
              className={`${styles.action} ${styles.trash}`}
              onClick={() => {
                setIsConfirming(true);
              }}
            />
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
      )}
    </>
  );
};

export default Recipe;
