import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "600px" }}>
        <h1 className="display-4 mb-3">Welcome to the User List Application</h1>
        <p className="lead mb-4">
          This is a simple single-page application built with ReactJS to display
          a list of users.
        </p>
        <Link to="/users">
          <button className="btn btn-primary btn-lg">View Users</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
