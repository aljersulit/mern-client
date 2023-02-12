import { Link } from "react-router-dom";
import "./User.scss";

export default function User(props) {
  const { firstname, lastname, email, gender, status, _id } = props.user;
  return (
    <tr>
      <td>{props.count}</td>
      <td>{`${firstname} ${lastname}`}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{status}</td>
      <td>
        <div className="btn-wrapper">
          <Link to={`/edit/${_id}`} className="btn btn-edit">
            <i className="fa-solid fa-pencil"></i>
          </Link>
          <button
            type="button"
            onClick={() => props.deleteUser(_id)}
            className="btn btn-delete"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}
