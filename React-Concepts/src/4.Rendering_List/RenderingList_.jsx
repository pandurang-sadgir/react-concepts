// Rendering list
const products = [
  {
    id: 1,
    Title: "mobile",
    name: "iphone1",
    price: 120000,
  },
  {
    id: 2,
    Title: "mobile",
    name: "iphone2",
    price: 120000,
  },
  {
    id: 3,
    Title: "mobile",
    name: "iphone3",
    price: 120000,
  },
  {
    id: 4,
    Title: "mobile",
    name: "iphone4",
    price: 120000,
  },
  {
    id: 5,
    Title: "mobile",
    name: "iphone5",
    price: 120000,
  },
];
const RenderingList = () => {
  const listItems = products.map((item) => (
    <div key={item.id} style={{ border: "0.1rem red solid", margin: "0.5rem",padding:'5rem' }}>
      <h6>{item.name}</h6>
    </div>
  ));
  console.log(listItems);
  return <div style={{ display: "flex" }}>{listItems}</div>;
};

export default RenderingList;
