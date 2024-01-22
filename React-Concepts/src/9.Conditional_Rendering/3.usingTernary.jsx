/* eslint-disable react/prop-types */

export default function PurchasedItem() {
  return (
    <div>
      <Itm name={"Rice"} isPurchased={true} />
      <Itm name={"GreenPeace"} isPurchased={false} />
      <Itm name={"Paneer"} isPurchased={true} />
    </div>
  );
}

// Note: we can use ternary conditional operator inside the JSX === HTML 
function Itm({ name, isPurchased }) {
  return (<>{isPurchased ? <h3>{name} &#x2713;</h3> : <h3>{name}</h3>}</>)
}
