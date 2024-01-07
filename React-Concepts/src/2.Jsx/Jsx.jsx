// 1
// Returning block of element ( )
// Every element must be closed
// <></> jsx fragment or top level element

export default function Jsx() {
  return (
    <>
      <Button />
    </>
  );
}

// 2
// Returning single component
const Button = () => {
  return <button>Click Me</button>;
};
