// Note: if condition not allowed inside jsx
// Instead you will use ternary or logical && operator.

export default function Condition() {
  let isValidUser = true;
  //   let component ;
  //1.  Using if condition
  //   if (isValidUser) {
  //     // console.log(<SignIn />);
  //     component = <SignIn />;
  //   } else {
  //     component = <SignUp />;
  //   }
  //   return component;

  // return (
  //     isValidUser? (<SignIn/>):<SignUp/>
  // )
  return (
    <>
      {isValidUser && <SignIn />}
      {!isValidUser && <SignUp />}
    </>
  );
}

const SignIn = () => {
  return (
    <div>
      <h1>This is Sign In Form</h1>
    </div>
  );
};
const SignUp = () => {
  return (
    <div>
      <h1>This is Sign Up Form </h1>
    </div>
  );
};
