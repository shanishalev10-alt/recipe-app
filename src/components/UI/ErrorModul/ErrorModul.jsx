import ReactDom from "react-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModul.module.css";

const ErrorModul = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <div className={styles["dark-background"]} onClick={props.onClosePopup}>
          <Card className={styles.popup}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Button onClick={props.onClosePopup}>Okay</Button>
          </Card>
        </div>,
        document.getElementById("overlay-root"),
      )}
    </>
  );
};

export default ErrorModul;
