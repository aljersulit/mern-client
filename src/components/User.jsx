import { Link } from "react-router-dom";

export default function User(props) {
  const { fullname, temperature, email, phonenumber, _id } = props.user;
  return (
    <tr>
      <td>{fullname}</td>
      <td>{temperature}</td>
      <td>{email}</td>
      <td>{phonenumber}</td>
      <td className="text-center">
        <Link to={`/edit/${_id}`} className="btn btn-sm btn-primary">
          Edit
        </Link>
        <button
          type="button"
          onClick={() => props.deleteUser(_id)}
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
