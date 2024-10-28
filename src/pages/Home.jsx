import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the User List Application</h1>
      <p>This is a simple SPA built with ReactJS to display a list of users.</p>
      <Link to="/users">
        <button>View Users</button>
      </Link>
    </div>
  );
}

export default Home;
