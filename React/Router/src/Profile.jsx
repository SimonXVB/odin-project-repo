import { Link } from "react-router-dom";

const Profile = () => {

  return (
    <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <hr />
        <h2>The profile visited is here:</h2>
        <p>Name: test</p>
        <p>Age: 25</p>
        <p>Location: unknown</p>
        <Link to={"/"}>Home Page</Link>
        <br />
        <Link to={"error"}>To Error Page</Link>
    </div>
  );
};

export default Profile;