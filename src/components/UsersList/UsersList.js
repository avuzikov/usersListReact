import React from "react";

const UsersList = (props) => {
  const list = props.list.map((user) => {
    return <li>{`${user.name} ${user.age}`}</li>;
  });
  return <ul>{list}</ul>;
};

export default UsersList;
