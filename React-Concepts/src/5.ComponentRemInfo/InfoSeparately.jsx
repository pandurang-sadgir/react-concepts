import { useState } from "react";

// Note: When we render same component multiple times then each every component has its own state separately.
export default function InfoSeparately() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }
  

  return (
    <>
      <button onClick={handleCount}> Count: {count}</button>
    </>
  );
}
