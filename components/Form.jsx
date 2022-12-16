const Form = () => {
  const onChange = () => {
    console.log(
      "input change to be stored in local state and sent to results component"
    );
  };

  const onClick = () => {
    console.log(
      "take the onChange value stored in local state and route to results"
    );
  };
  return (
    <div>
      <label>Name:</label>
      <input onChange={onChange} />
      <button onClick={onclick}>submit</button>
    </div>
  );
};

export default Form;
