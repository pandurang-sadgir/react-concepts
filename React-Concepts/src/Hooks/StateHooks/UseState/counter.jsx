// Note
// 1.Call use state hoot at top level of your component
// 2The convention is to name state variables like [something, setSomething] using array destructuring.

import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() { 
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>You clicked me :{count} times</button>
    </>
  );
}
