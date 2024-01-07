// Note: jsx expression  {} curly braces is used to access variable value
// We can use style attribute when your style is depends on js variable
// always define syntax like this style={{style_object}}
// Note: There must be object in style attribute.

const IMAGE_STYLE = {
  width: "40rem",
  height: "30rem",
  border: "0.1rem black solid",
};

import img from "../assets/image1.jpg";
export default function DisplayingData() {
  return (
    <div style={{ border: IMAGE_STYLE.border }}>
      <img
        src={img}
        style={{ width: IMAGE_STYLE.width, height: IMAGE_STYLE.height }}
        alt=""
      />
    </div>
  );
}
