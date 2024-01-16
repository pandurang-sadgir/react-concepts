import { useState } from "react";
export default function TextField() {
  const [text, setText] = useState("Hi..");
  function handleOnclick() {
    setText("");
  }
  function handleonChange(e) {
    setText(e.target.value);
    console.log(e, "This is event information");
  }

  return (
    <>
      <input type="text" value={text} onChange={handleonChange} />
      <h3>You Typed Text :{text}</h3>
      <button onClick={handleOnclick}>Reset</button>
    </>
  );
}
