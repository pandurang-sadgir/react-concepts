/* eslint-disable react/prop-types */
// Challenge 1 of 3:
// Extract a component
// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

import { getImageUrl } from "./utils.jsx";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {/* First profile card */}
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
        size={120}
      />
      
    </div>
  );
}

function Profile(props) {
  console.log(props);
  return (
    <div> 
      <section className="profile" style={{border:'0.1rem blue solid'}}>
        <h2>{props.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(props.imageId)}
          alt={props.name}
          width={props.size}
          height={props.size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {props.profession}
          </li>
          <li>
            <b>Awards: {props.awards.length} </b>
            [{props.awards.join(',')}]
          </li>
          <li>
            <b>Discovered: </b>
            {props.discovery}
          </li>
        </ul>
      </section>
    </div>
  );
}
