import { useEffect, useState } from "react";
import axios from "axios";
import User from "../User/User";
import { Link } from "react-router-dom";
import "./UserList.scss";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://mern-server-s0l6.onrender.com/users")
        .then((response) => setUsers(response.data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    await axios
      .delete(`https://mern-server-s0l6.onrender.com/users/delete/${id}`)
      .then((res) => {
        alert("User Deleted...");
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      });
  };

  return (
    <div className="app-container">
      <Link to="/create" className="app-option">
        New User <i className="fa-solid fa-user" />
      </Link>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <User
                key={user._id}
                count={users.indexOf(user) + 1}
                user={user}
                deleteUser={deleteUser}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
