export default function Forwarding_props_with_jsx() {
  return (
    <div>
      <Acomponent color={"red"} fontSize={"2rem"} />
      <Acomponent color={"blue"} fontSize={"2rem"} />
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Acomponent(props) {
    return (
        <div>
      <h1 style={{ ...props }}>Passing props with jsx spread operator</h1>
      <Bcomponent {...props}/>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function Bcomponent(props) {
    console.log(`Bcomponent`,{props});
  return (
    <>
      <h2 style={props}>This is Third Component</h2>
    </>
  );
}
