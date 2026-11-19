import List from "../List/List";
import Card from "../UI/Card/Card";
import styles from "./Recipe.module.css";

const Recipe = (props) => {
  return (
    <Card className={styles.recipe}>
      <p className={styles.title}>{props.title}</p>
      {props.src && <img src={props.src} className={styles.img} alt="dish" />}
      <div className={styles["main-content"]}>
        <div>
          <List list={props.ingridiants} name="ingridiant" />
        </div>
        <div>
          <List list={props.instructions} name="instruction" />
        </div>
      </div>
    </Card>
  );
};

export default Recipe;
