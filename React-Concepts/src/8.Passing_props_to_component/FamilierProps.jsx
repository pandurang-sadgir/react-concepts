//Note: Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:

import img from "../assets/image1.jpg";
const IMAGE_SIZE = {
  width:  100,
  height: 100,
  borderRadious:"50%"
};

export default function FamilierProps() {
  return (
    <div>
      <Avatar />
    </div>
  );
}

function Avatar() {
  return (
    <img
      src={img}
      alt="This is an desk image"
      width={IMAGE_SIZE.width}
      height={IMAGE_SIZE.height}
      style={{borderRadius:IMAGE_SIZE.borderRadious}}
    />
  );
}
