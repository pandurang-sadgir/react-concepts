// Impure Component
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <h2>This is Impure Component</h2>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
