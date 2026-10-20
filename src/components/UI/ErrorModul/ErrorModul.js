import Card from "../Card/Card";
import Button from "../../UI/Button/Button";
import "./ErrorModul.css";

const ErrorModul = (props) => {
  return (
    <div className="dark-background" onClick={props.onClosePopup}>
      <Card className="popup">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Button onClick={props.onClosePopup}>Okay</Button>
      </Card>
    </div>
  );
};

export default ErrorModul;
