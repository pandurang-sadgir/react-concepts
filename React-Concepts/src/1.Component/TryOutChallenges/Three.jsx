// Spot the mistake
// Something’s wrong with how the Profile component is declared and used. Can you spot the mistake? (Try to remember how React distinguishes components from the regular HTML tags!)

// function profile() {
//     return (
//       <img
//         src="https://i.imgur.com/QIrZWGIs.jpg"
//         alt="Alan L. Hart"
//       />
//     );
//   }
  
//   export default function Gallery() {
//     return (
//       <section>
//         <h1>Amazing scientists</h1>
//         <profile />
//         <profile />
//         <profile />
//       </section>
//     );
//   }
  
// Solutions 
function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }