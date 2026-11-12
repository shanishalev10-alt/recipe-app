const DynamicInputs = (props) => {
  const inputChangeHandler = (event) => {
    let newInputs = [...props.inputValuesArray];
    newInputs[parseInt(event.target.id.replace(/[^0-9]/g, ""))] =
      event.target.value;

    newInputs = newInputs.filter((input) => input.trim() !== "");
    props.setInputValuesArray(newInputs);
  };

  return (
    <>
      {props.inputValuesArray.map((value, index) => (
        <input
          id={`${props.fieldName}${index}`}
          key={`input${index}`}
          value={value}
          onChange={(event) => {
            inputChangeHandler(event);
          }}
          maxLength="100"
          autoFocus
        />
      ))}
      <input
        id={`${props.fieldName}${props.inputValuesArray.length}`}
        key={`input${props.inputValuesArray.length}`}
        onChange={(event) => {
          inputChangeHandler(event);
        }}
        maxLength="100"
      />
    </>
  );
};

export default DynamicInputs;
