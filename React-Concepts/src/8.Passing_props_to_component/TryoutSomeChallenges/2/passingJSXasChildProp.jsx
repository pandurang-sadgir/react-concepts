/* eslint-disable react/prop-types */
// Passing JSX in a children prop
// Extract a Card component from the markup below, and use the children prop to pass different JSX to it:
export default function Profile() {
  return (
    <div>
      <Card title={"Photo of A"}>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card title={"About me"}>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}

function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
