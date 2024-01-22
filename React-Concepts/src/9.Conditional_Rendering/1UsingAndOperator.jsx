/* eslint-disable react/prop-types */
// Conditionally rendering checkmark to an items using condition

export default function ListOfItems() {
  return (
    <div>
      <Item name={"Apple 🍎"} isPurchased={true} />
      <Item name={"Mango 🥭"} isPurchased={false} />
      <Item name={"Orange 🍊"} isPurchased={true} />
      <Item name={"Banana 🍌"} isPurchased={false} />
      <Item name={"Strawberry 🍓"} isPurchased={false} />
      <Item name={"Cherry 🍒"} isPurchased={false} />
      <Item name={"Avacado 🥑"} isPurchased={true} />
    </div>
  );
}

function Item({ name, isPurchased }) {
  return (
    <div
      style={{
        border: "0.1rem black solid",
        width: "50rem",
        height: "auto",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", outline: "none", border: "none" }}>
        {name} {isPurchased && <span> &#x2713; </span>}
      </h1>
    </div>
  );
}
