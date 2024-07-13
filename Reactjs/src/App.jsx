import React, { useReducer } from "react";

function reducerFn (state,action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducerFn, { count: 0 });

  const HandlehangeIncrement = () => {
    dispatch({ type: "increment" });
  };

  const HandlehangeDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={HandlehangeIncrement}>Increment</button>
      <button onClick={HandlehangeDecrement}>Decrement</button>
    </div>
  );
}

export default App;
