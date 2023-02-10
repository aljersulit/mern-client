import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/users/delete/${id}`).then((res) => {
      alert("User Deleted...");
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    });
  };

  return (
    <div className="container">
      <h1>User List</h1>

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Full Name</th>
            <th>Temperature</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <User key={user._id} user={user} deleteUser={deleteUser} />;
          })}
        </tbody>
      </table>

      {/* <ul>
        {users.map((user) => {
          return (
            <li key={user._id}>
              {`Name: ${user.fullname} | Temperature: ${user.temperature} |
              Email: ${user.email} | Contact: ${user.phonenumber}`}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
