/* eslint-disable react/prop-types */
// Challenge 1 of 4: Note: Solving same problem but refactoring our code with props
// Challenge 1 of 4:
// Splitting a list in two

// This example shows a list of all people.

// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.

// Data.jsx
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

//   Utility.jsx
function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>

      {people.map((item) => {
        return (
          <li key={item.id}>
            <img src={getImageUrl(item)} alt="" />
            <p>
              <b>{item.name}:</b>
              {/* here we add space using string  */}
              {" " + item.profession + " "} known for {item.accomplishment}
            </p>
          </li>
        );
      })}
    </>
  );
}

export default function SplittingList() {
  const chemist = people.filter((item) => {
    return item.profession === "chemist";
  });
  const everyoneElse = people.filter((item) => {
    return item.profession !== "chemist";
  });

  return (
    <>
      <h1>Scientist</h1>
      <ul>
        <ListSection title={"Chemist"} people={chemist} />
        <ListSection title={"Everyone Else"} people={everyoneElse} />
      </ul>
    </>
  );
}
