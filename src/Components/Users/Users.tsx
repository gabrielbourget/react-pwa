import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getUsers } from "../../api/api";

const USER_DATA_KEY = "users";
const STATE__ONLINE = "online";
const STATE__OFFLINE = "offline";

const Users: React.FC = () => {
  const [userData, setUserData] = useState([]);
  const [mode, setMode] = useState(STATE__ONLINE);
  
  useEffect(() => {
    (async () => {
      const [ users, err ] = await getUsers();

      console.log(`Data -> ${users}, Error -> ${err}`);

      if (err) {
        let cachedUsersCollection = localStorage.getItem(USER_DATA_KEY);
        console.log(`[Users]: cached user collection -> ${JSON.parse(cachedUsersCollection!)}`);
        if (cachedUsersCollection) setUserData(JSON.parse(cachedUsersCollection));
        setMode(STATE__OFFLINE);
      }

      setUserData(users);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(users));
    })();
  }, []);
  
  console.log(`[Users]: user data -> ${userData}`);

  return (
    <div>
      {
        (mode === STATE__OFFLINE) ? (
          <div className="alert alert-warning" role="alert">Device is currently offline.</div>
        ) : null
      }
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Street</th>
          </tr>
        </thead>
        <tbody>
          {
            (userData) ? (
              (userData).map((user: any) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
                </tr>
              ))
            ) : (
              <h1>no data</h1>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
