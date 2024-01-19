import img from "../assets/image1.jpg";
// src\assets\image1.jpg

export default function Profile() {
  return (
    <Card>
      <Avatar />
      <A/>
    </Card>
  );
}

// eslint-disable-next-line react/prop-types
function Card({ children }) {
  return (
    <div
      style={{
        width: "500px",
        border: "0.1rem red solid ",
        backgroundColor: "wheat",
      }}
    >
      <h4>This is Children props</h4>
      {children}
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        src={img}
        alt=""
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
      />
    </div>
  );
}


 function A() {
  return (
    <div>
    <h2>This is second component</h2>
      
    </div>
  )
}
