import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dataAction } from "../store";
import DeletePop from "../UI/DeletePop";
import { useState } from "react";

const UserItem = ({ props }) => {
  const [modal, setModal] = useState(false);

  const deleteHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <DeletePop props={props} close={closeModalHandler} />}
      <tr className="users-list">
        <th>{props.id}</th>
        <th>{props.name}</th>
        <th>{props.username}</th>
        <th>{props.email}</th>
        <th>{props.address.city}</th>
        <th>
          <Link to={`${props.id}`}>
            <button style={{ backgroundColor: "orange" }}>edit</button>
          </Link>
        </th>
        <th>
          <button style={{ backgroundColor: "red" }} onClick={deleteHandler}>
            delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default UserItem;
