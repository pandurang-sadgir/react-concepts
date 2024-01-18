/* eslint-disable react/prop-types */
import img from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
const IMAGE_LIST = [
  { borderRadius: "50%" },
  {
    image: img,
    name: "first Image",
    marginLeft: "1rem",
  },
  {
    image: img2,
    name: "second Image",
    marginLeft: "1rem",
  },
  {
    image: img3,
    name: "Third Image",
    marginLeft: "1rem",
  },
  {
    image: img4,
    name: "Third Image",
    marginLeft: "1rem",
  },
];

export default function PassingPropstoComponent() {
  return (
    <div style={{ display: "flex" }}>
      <Avatar
        imgData={IMAGE_LIST[1]}
        size={"200px"}
        radius={IMAGE_LIST[0].borderRadius}
      />
      <Avatar
        imgData={IMAGE_LIST[2]}
        size={"100px"}
        radius={IMAGE_LIST[0].borderRadius}
      />
      <Avatar
        imgData={IMAGE_LIST[3]}
        size={"50px"}
        radius={IMAGE_LIST[0].borderRadius}
      />
      <Avatar
        imgData={IMAGE_LIST[4]}
        size={"30px"}
        radius={IMAGE_LIST[0].borderRadius}
      />
    </div>
  );
}

function Avatar({ imgData, size, radius }) {
  console.log(typeof size);
  return (
    <div>
      <img
        src={imgData.image}
        alt={imgData.name}
        style={{
          width: size,
          height: size,
          borderRadius:radius,
          marginLeft: imgData.marginLeft,
        }}
      />
    </div>
  );
}
