import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CreateNewUser() {
  const [user, setUser] = useState({
    fullname: "",
    temperature: "",
    email: "",
    phonenumber: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => {
        const { fullname, temperature, email, phonenumber } = res.data;
        setUser({
          fullname,
          temperature,
          email,
          phonenumber,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/users/update/${id}`, user)
      .then(() => (window.location = "/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Edit User</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={handleChange}
            value={user.fullname}
            name="fullname"
            type="text"
            className="form-control"
            id="fullname"
            required
          />
          <label htmlFor="temperature">Temperature</label>
          <input
            onChange={handleChange}
            value={user.temperature}
            name="temperature"
            type="number"
            className="form-control"
            id="temperature"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={user.email}
            name="email"
            type="email"
            className="form-control"
            id="email"
            required
          />
          <label htmlFor="contact">Contact</label>
          <input
            onChange={handleChange}
            value={user.phonenumber}
            name="phonenumber"
            type="tel"
            className="form-control"
            id="contact"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
