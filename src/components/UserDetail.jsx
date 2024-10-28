import React from "react";
import { useParams } from "react-router-dom";

function UserDetail({ users }) {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <p>User not found!</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

export default UserDetail;
