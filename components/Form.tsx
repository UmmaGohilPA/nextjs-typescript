import { useState, ChangeEvent, MouseEvent } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(
      "input change to be stored in local state and sent to results component"
    );
    setName(e.target.value);
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(
      "take the onChange value stored in local state and route to results"
    );
  };
  return (
    <div>
      <label>Name:</label>
      <input onChange={onChange} />
      <button onClick={onClick}>submit</button>
    </div>
  );
};

export default Form;