import React from 'react';
import UserForm from './UserForm';

function CreateUser({ addUser }) {
  return (
    <div>
      <h1>Add User</h1>
      <UserForm onSubmit={addUser} />
    </div>
  );
}

export default CreateUser;