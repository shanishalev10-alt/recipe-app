import { useRef, useState, useContext } from "react";
import RecipesContext from "../../store/recipes-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModul from "../UI/ErrorModul/ErrorModul";
import DynamicInputs from "../DynamicInputs/DynamicInputs";
import styles from "./AddRecipe.module.css";

const PICTURE_TYPE = /image.*/;

const AddRecipe = (props) => {
  const recipeCtx = useContext(RecipesContext);
  const [title, setTitle] = useState(props.title || "");
  const [instructions, setInstructions] = useState(props.instructions || []);
  const [ingridiants, setIngridiants] = useState(props.ingridiants || []);
  const [src, setSrc] = useState(props.src || "");
  const [error, setError] = useState();

  const pictureInputRef = useRef(null);

  const uploadPictureHandler = (event) => {
    if (event.target.files[0].type.match(PICTURE_TYPE)) {
      return setSrc(URL.createObjectURL(event.target.files[0]));
    }

    deletePicture();

    return setError({
      title: "Invalid File Type",
      text: "The input must be an image",
    });
  };

  const deletePicture = () => {
    setSrc("");
    pictureInputRef.current.value = null;
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

    recipeCtx.addRecipe({ title, ingridiants, instructions, src });

    setTitle("");
    setInstructions([]);
    setIngridiants([]);
    setSrc("");
    event.target.reset();
  };

  const closePopupHandler = () => {
    setError(null);
  };

  const saveChanges = () => {
    recipeCtx.editRecipe({
      id: props.id,
      title,
      ingridiants,
      instructions,
      src,
    });
    props.onSwitchEditing();
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
          {!props.title && <h2>'Add a recipe to your collection:)'</h2>}
          <label className={styles.label}>
            Recipe title
            <input
              type="text"
              value={title}
              onChange={titleChangeHandler}
              name="title"
              maxLength="50"
            />
          </label>
          <label className={styles["drop-zone"]}>
            <input
              type="file"
              accept="image/*"
              onChange={uploadPictureHandler}
              className={styles["file-input"]}
              ref={pictureInputRef}
            />
          </label>
          {src && (
            <>
              <img src={src} className={styles.preview} alt="preview" />
              <button
                className={styles["delete-button"]}
                onClick={deletePicture}
              >
                - Remove image
              </button>
            </>
          )}
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
          {!props.title && <Button type="submit">+ Add Recipe</Button>}
          {props.title && (
            <div className={styles.actions}>
              <Button className={styles.cancel} onClick={props.onSwitchEditing}>
                Cancel
              </Button>
              <Button onClick={saveChanges}>Save Changes</Button>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default AddRecipe;
