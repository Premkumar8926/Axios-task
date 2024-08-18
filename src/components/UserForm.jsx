// src/components/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ onSave, selectedUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: '', email: '' });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <button type="submit" style={{ backgroundColor: selectedUser ? 'blue' : 'green', color: 'white' }}>
        {selectedUser ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default UserForm;
