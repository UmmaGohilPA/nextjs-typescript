import { useState, ChangeEvent, MouseEvent } from "react";
import Router, { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const [name, setName] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(
      "input change to be stored in local state and sent to results component"
    );
    setName(e.target.value);
    console.log(name);
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(name);
    Router.push({
      pathname: "/results",
      query: { name },
    });
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
