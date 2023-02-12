import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateNewUser() {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    status: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("https://mern-server-s0l6.onrender.com/users/add", newUser)
        .then(() => (window.location = "/"));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <Link to="/">&lt;&lt; All Users</Link>
      <h2 className="title">New User</h2>
      <p className="description">Use the below form to create a new account</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          onChange={handleChange}
          value={newUser.firstname}
          type="text"
          name="firstname"
          id="firstname"
          required
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          onChange={handleChange}
          value={newUser.lastname}
          type="text"
          name="lastname"
          id="lastname"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={newUser.email}
          type="text"
          name="email"
          id="email"
          required
        />

        <div>
          <p className="inline">Gender</p>
          <div className="inline">
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={newUser.gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="inline">
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={newUser.gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div>
          <p className="inline">Status</p>
          <div className="inline">
            <input
              onChange={handleChange}
              type="radio"
              name="status"
              id="active"
              value="Active"
              checked={newUser.status === "Active"}
            />
            <label htmlFor="active">Active</label>
          </div>
          <div className="inline">
            <input
              onChange={handleChange}
              type="radio"
              name="status"
              id="inactive"
              value="Inactive"
              checked={newUser.status === "Inactive"}
            />
            <label htmlFor="inactive">Inactive</label>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
