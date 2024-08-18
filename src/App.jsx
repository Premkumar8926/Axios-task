// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users from the mock API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

   // Add user
  const handleAddUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  // Update user
  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

    // Delete user
  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleSaveUser = (user) => {
    if (selectedUser) {
      handleUpdateUser(user);
    } else {
      handleAddUser(user);
    }
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm onSave={handleSaveUser} selectedUser={selectedUser} />
      <UserList
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default App;
