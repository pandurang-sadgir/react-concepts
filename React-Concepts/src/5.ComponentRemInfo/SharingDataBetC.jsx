/* eslint-disable react/prop-types */
import { useState } from "react";
export default function SharingDataBetC() {
  function handleClick() {
    setCount(count + 1);
  }
  const [count, setCount] = useState(0);
  return (
    <>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </>
  );
}

const Button = ({ count, onClick }) => {
  return (
    <>
      <button onClick={onClick}>Count is:{count}</button>
    </>
  );
};
