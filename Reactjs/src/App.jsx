import React, { useMemo, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const Increment = () => {
    console.log("increment");
    setCount((c) => c + 1);
  };

  const Maximum = () => {
    console.log("Maximum");
    return Math.max(...numbers);
  };

  const memo = useMemo(() => {
    return Maximum();
  }, [numbers]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={Increment}>Increment</button>
      {/* <p>{Maximum()}</p>
       */}
      <p>Maximum value:{memo}</p>
      <button onClick={()=>setNumbers([...numbers,count*2])}>Add Numbers</button>
      <p>{JSON.stringify(numbers)}</p>
    </div>
  );
}

export default Example;