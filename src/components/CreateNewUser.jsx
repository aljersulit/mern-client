import { useState } from "react";
import axios from "axios";

export default function CreateNewUser() {
  const [newUser, setNewUser] = useState({
    fullname: "",
    temperature: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users/add", newUser)
      .then(() => (window.location = "/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Create New User</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={handleChange}
            value={newUser.fullname}
            name="fullname"
            type="text"
            className="form-control"
            id="fullname"
            required
          />
          <label htmlFor="temperature">Temperature</label>
          <input
            onChange={handleChange}
            value={newUser.temperature}
            name="temperature"
            type="number"
            className="form-control"
            id="temperature"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={newUser.email}
            name="email"
            type="email"
            className="form-control"
            id="email"
            required
          />
          <label htmlFor="contact">Contact</label>
          <input
            onChange={handleChange}
            value={newUser.phonenumber}
            name="phonenumber"
            type="tel"
            className="form-control"
            id="contact"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create User
        </button>
      </form>
    </div>
  );
}
