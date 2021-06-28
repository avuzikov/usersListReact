import React, { useState } from "react";

const NewUserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const setNameHandler = (event) => {
    setName(event.target.value);
  };
  const setAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const user = { key: Math.random().toString(), name: name, age: age };
    props.onAddUser(user);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input type="text" onChange={setNameHandler}></input>
      </div>
      <div>
        <label>Age</label>
        <input type="number" min="0" max="150" onChange={setAgeHandler}></input>
      </div>
      <div>
        <button type="submit">Add user</button>
      </div>
    </form>
  );
};

export default NewUserForm;
