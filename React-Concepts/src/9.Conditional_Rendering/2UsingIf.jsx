/* eslint-disable react/prop-types */
// Conditional Rendering using If statement

export default function PurchasedItems() {
  return (
    <>
    <h2>Purchased Items</h2>
    <Items name={'Rice'} isPurchased={true}/>
    <Items name={'wheat '} isPurchased={false}/>
    <Items name={'panir '} isPurchased={true}/>

    </>
  );
}


// We are here return JSX from If statement. 
function Items({ name, isPurchased }) {
  if (isPurchased) {
    return <h3>{name} &#x2713;</h3>;
  }else{
    return <h3>{name}</h3>;

  }
}
