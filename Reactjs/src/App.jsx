import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(() => count + 1);
  };

  const handleChangeDecrement = () => {
    if (count > 0) {
      setCount(() => count - 1);
    }
  };

  const memo = useMemo(() => {
    setCount(() => count + 1);
  }, [count]);

  

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleChange}>Increment</button>
      <button onClick={handleChangeDecrement}>Decrement</button>
    </div>
  );
}

export default App;
