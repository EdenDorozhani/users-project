import { Link } from "react-router-dom";

const UserItem = ({ props, openModal, authData }) => {
  const openModalHandler = () => {
    openModal();
    authData(props);
  };

  return (
    <tr className="users-list">
      <th>{props.id}</th>
      <th>{props.name}</th>
      <th>{props.username}</th>
      <th>{props.email}</th>
      <th>{props.address.city}</th>
      <th>
        <Link to={`edit-item/${props.id}`}>
          <button style={{ backgroundColor: "orange" }}>edit</button>
        </Link>
      </th>
      <th>
        <button style={{ backgroundColor: "red" }} onClick={openModalHandler}>
          delete
        </button>
      </th>
    </tr>
  );
};

export default UserItem;
