import React, { useState } from "react";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import UsersList from "./components/UsersList/UsersList"
const App = () => {
  const [list, setList] = useState([
    {
      key: Math.random().toString(),
      name: "Alex",
      age: 22,
    },
  ]);
  const updateList = (user) => {
    setList((oldList) => {
      return [user, ...list];
    });
  };
  return (
    <div>
      <NewUserForm onAddUser={updateList}></NewUserForm>
      <UsersList list={list}></UsersList>
    </div>
  );
};

export default App;
