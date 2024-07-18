import React, { lazy, Suspense, useCallback, useMemo, useState } from "react";

const Component1 = lazy(() => import("./Component1"));
const Component2 = lazy(() => import("./Component2"));

function App() {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => {
    console.log("Memo value");
    return count * 2;
  }, [count]);

  const increment = useCallback(() => {
    console.log("call back");
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <p>memovalue:{memoizedValue}</p>

      <Suspense fallback={<div> Component 1 loading</div>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<div> Component 2 loading</div>}>
        <Component2 />
      </Suspense>
    </div>
  );
}

export default App;
