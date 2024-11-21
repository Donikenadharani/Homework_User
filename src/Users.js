import React from 'react';
import { Link } from 'react-router-dom';

function Users({ users, setUsers }) {
    
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user-details/${user.id}`}>{user.name}</Link> - {user.email}
            
            <Link to={`/update-user/${user.id}`}>Edit</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/create-user">
        <button>Add New User</button>
      </Link>
    </div>
  );
}

export default Users;
