import { useState, useEffect } from "react";

function Data() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoad(false);
      });
  }, []);
  return (
    <div>
      <h1>Users</h1>

      {load && <div>Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Data;
