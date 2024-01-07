// Component can be nested
// Component name must be in Pascal case case

// Parent componet
export default function NestingComponent() {
  return <Button />;
}

// Child componet
const Button = () => {
  return <button>Child Component Button nested</button>;
};
 

// Note: Always devide large component into small components 