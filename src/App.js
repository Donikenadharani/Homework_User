import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import UserDetails from './UserDetails';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { id: 100, name: "Dharani Donikena", email: 'dharani123@gmail.com',password:'123456' },
    { id: 990, name: "Prashanth", email: 'prashanth12@gmail.com',password:'123456' }
  ]);

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={users} setUsers={setUsers} />} />
        <Route path="/create-user" element={<CreateUser addUser={addUser} />} />
        <Route path="/update-user/:id" element={<UpdateUser users={users} updateUser={updateUser} />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App