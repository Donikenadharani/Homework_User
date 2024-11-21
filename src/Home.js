import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the User Management System</h1>
      <p>This appliaction is used to Add/Edit/Delete the user  </p>
      <Link to="/users" className="home-button">View User List</Link>
    </div>
  );
}

export default Home;