import img from "../assets/image1.jpg";
const IMGPROPERTY = {
  width: 150,
  height: 150,
  padding: "2rem",
  ra: "50%",
};
// Note: Inside the object we are just storing value with any keys
export default function Galary() {
  return (
    <div>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

const Profile = () => {
  return (
    <img
      src={img}
      alt="profile image"
      width={IMGPROPERTY.width}
      height={IMGPROPERTY.height}
      style={{ padding: IMGPROPERTY.padding, 
      borderRadius:IMGPROPERTY.ra}}


    />
  );
};
