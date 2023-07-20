import { useDispatch } from "react-redux";
import { dataAction } from "../store";
import ReactDOM from "react-dom";

const ModalOverlay = ({ id, email, cancelDelete, confirmDelete }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <p>You sure you wanna delete?</p>
        <div className="user-identifier">
          <h3>
            Id :<span>{id}</span>
          </h3>
          <h3>
            Email :<span>{email}</span>
          </h3>
        </div>
        <button className="cancel-modal-button" onClick={cancelDelete}>
          Cancel
        </button>
        <button className="delete-modal-button" onClick={confirmDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

const DeletePop = ({ props, close }) => {
  const dispatch = useDispatch();

  const cancelDelete = () => {
    close();
  };
  const confirmDelete = () => {
    dispatch(dataAction.deleteItem(props.id));
    close();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          id={props.id}
          email={props.email}
          cancelDelete={cancelDelete}
          confirmDelete={confirmDelete}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default DeletePop;
