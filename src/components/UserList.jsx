// src/components/UserList.js
import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button
              onClick={() => onEdit(user)}
              style={{ marginLeft: '10px', backgroundColor: 'blue', color: 'white' }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(user.id)}
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
