import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserslist] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUserslist((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random.toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
