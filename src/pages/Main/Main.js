import React from "react";
import { useAuth } from "../../context/AuthContext";

function Main() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Welcome to Book End</h1>
      <p>{user?.email}</p>
      <h2>Featured Books</h2>
    </div>
  );
}

export default Main;
