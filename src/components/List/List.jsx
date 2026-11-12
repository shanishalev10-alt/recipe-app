const List = ({ list, name }) => {
  return (
    <>
      {list.map((item, index) => (
        <p key={`${name}${index}`}>
          {index + 1}. {item}
        </p>
      ))}
    </>
  );
};

export default List;
