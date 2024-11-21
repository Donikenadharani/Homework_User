import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  let { id } = useParams();
  
  const user = { id, name: 'Vennela dasari', email: 'vennela@gmail.com' ,password:'123456'};

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password:{user.password}</p>
    </div>
  );
}

export default UserDetails;