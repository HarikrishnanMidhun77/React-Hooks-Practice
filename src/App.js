import "./App.css";
import { useReducer, useContext } from "react";
import { useInput } from "./useInput";
// import { FruitsContext } from ".";
import { useFruits } from ".";

function App() {
  const onSubmitFn = (e) => {
    e.preventDefault();
    alert(`you typed ${textInputProps.value}`);
    textRevertFn();
  };
  const initialState = {
    message: "hello",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "yell":
        return {
          message: "heyyyyy",
        };
      case "whisper":
        return {
          message: "shhhh",
        };
      default:
        return {
          message: "hi",
        };
    }
  };
  const [state, dispach] = useReducer(reducer, initialState);
  const [textInputProps, textRevertFn] = useInput("");
  const [number, setNumber] = useReducer((number, newNumber) => {
    return number + newNumber;
  }, 0);

  // const { fruits } = useContext(FruitsContext);
  const { fruits } = useFruits();
  console.log("fruits", fruits);

  return (
    <>
      <form>
        <input type="text" placeholder="color Name" {...textInputProps} />
        <input type="color" />
        <button onClick={onSubmitFn}>Submit </button>
      </form>
      <h1>{state.message}</h1>
      <button
        onClick={() => {
          dispach({ type: "yell" });
        }}
      >
        Yell{" "}
      </button>
      <button
        onClick={() => {
          dispach({ type: "whisper" });
        }}
      >
        whisper{" "}
      </button>

      <br />
      <h1 onClick={() => setNumber(1)}>{number}</h1>
      <br />
      <ul>
        {fruits.map((f) => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
