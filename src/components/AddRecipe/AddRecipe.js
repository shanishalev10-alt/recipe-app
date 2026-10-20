import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModul from "../UI/ErrorModul/ErrorModul";
import DynamicInputs from "../DynamicInputs/DynamicInputs";
import styles from "./AddRecipe.module.css";

const AddRecipe = (props) => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState([]);
  const [ingridiants, setIngridiants] = useState([]);
  const [src, setSrc] = useState();
  const [error, setError] = useState();

  const pictureType = /image.*/;

  const uploadPictureHandler = (event) => {
    if (event.target.files[0].type.match(pictureType)) {
      setSrc(URL.createObjectURL(event.target.files[0]));
      return console.log("Is a pic!");
    }
    console.log("It is not a pic!");
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //if any fields are empty
    if (!title) {
      return setError({
        title: "Missing Input",
        text: "Recipes should have a title",
      });
    } else if (ingridiants.length === 0) {
      return setError({
        title: "Missing Input",
        text: "At least one ingridiants is required",
      });
    } else if (instructions.length === 0) {
      return setError({
        title: "Missing Input",
        text: "At least one instruction is required",
      });
    }

    props.onAddRecipe({ title, ingridiants, instructions, src });

    setTitle("");
    setInstructions([]);
    setIngridiants([]);
    setSrc();
  };

  const closePopupHandler = () => {
    setError(null);
  };

  return (
    <div className={styles.outer}>
      {error && (
        <ErrorModul
          onClosePopup={closePopupHandler}
          title={error.title}
          text={error.text}
        />
      )}
      <Card className={styles.card}>
        <form className={styles.form} onSubmit={submitHandler}>
          <h2>Add a recipe to your collection:)</h2>
          <label className={styles.label}>
            Recipe title
            <input type="text" value={title} onChange={titleChangeHandler} />
          </label>
          <label className={styles["drop-zone"]}>
            <input
              type="file"
              onChange={uploadPictureHandler}
              className={styles["file-input"]}
            />
          </label>
          {src && <img src={src} className={styles.preview} />}
          <div className={styles["main-content"]}>
            <label className={styles.label}>
              Recipe ingridiants
              <DynamicInputs
                inputValuesArray={ingridiants}
                setInputValuesArray={setIngridiants}
                fieldName="ingridiants"
              />
            </label>
            <label className={styles.label}>
              Recipe instructions
              <DynamicInputs
                inputValuesArray={instructions}
                setInputValuesArray={setInstructions}
                fieldName="instructions"
              />
            </label>
          </div>
          <Button className="add-button" type="submit">
            Add Recipe
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddRecipe;
