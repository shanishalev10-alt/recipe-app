import ReactDom from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ConfirmModule.module.css";

const ConfirmModul = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <div className={styles["dark-background"]}>
          <Card className={styles.popup}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Button className={styles.cancel} onClick={props.onCancel}>Cancel</Button>
            <Button className={styles['confirmation-btn']} onClick={props.onConfirm}>Yes</Button>
          </Card>
        </div>,
        document.getElementById("overlay-root"),
      )}
    </>
  );
};

export default ConfirmModul;
