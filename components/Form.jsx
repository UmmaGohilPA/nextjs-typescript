const Form = () => (
  <div>
    <label>Name:</label>
    <input
      onChange={() =>
        console.log(
          "input change should be stored in state and sent to results component"
        )
      }
    />
    <button
      onClick={() => console.log("submit the input and route to results")}
    >
      submit
    </button>
  </div>
);

export default Form;
