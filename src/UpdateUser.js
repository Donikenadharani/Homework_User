import React from 'react';
import { useParams } from 'react-router-dom';
import UserForm from './UserForm';

function UpdateUser({ users, updateUser }) {
  let { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm user={user} onSubmit={updateUser} />
    </div>
  );
}

export default UpdateUser;