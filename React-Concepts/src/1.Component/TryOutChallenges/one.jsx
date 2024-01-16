// Export the component
// This sandbox doesn’t work because the root component is not exported:

// function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/lICfvbD.jpg"
//         alt="Aklilu Lemma"
//       />
//     );
//   }

// Solution 
export default function Profile() {
    return (
      <img
        src="https://i.imgur.com/lICfvbD.jpg"
        alt="Aklilu Lemma"
      />
    );
  }