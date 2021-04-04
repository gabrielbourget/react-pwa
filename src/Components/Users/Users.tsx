import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getUsers } from "../../api/api";

const Users: React.FC = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    (async () => {
      const users = await getUsers();
      setUserData(users);
    })();
  }, [])
  
  console.log(`[Users]: user data -> ${userData}`);

  return (
    <div>
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
            (userData).map((user: any) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
