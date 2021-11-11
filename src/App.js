import React, { useState } from 'react';
import "./App.css";
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';
const App = () => {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (user) => {
    setUsersList(prevUsers =>
      [user, ...prevUsers])
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <div>
        <UsersList users={usersList} />
      </div>

    </div>
  );
}

export default App;
