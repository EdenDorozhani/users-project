import { Link } from "react-router-dom";

const AddItem = () => {
  return (
    <div className="userlist-title">
      <h3>User List</h3>

      <Link to={"new"}>
        <button>Add User</button>
      </Link>
    </div>
  );
};

export default AddItem;
