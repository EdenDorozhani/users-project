import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseSelector } from "react-redux";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { dataAction } from "../store";

const AddItem = ({ search }) => {
  const onChangeHandler = (e) => {
    search(e.target.value);
  };

  return (
    <div className="userlist-title">
      <h3>User List</h3>
      <div>
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Search something..."
          className="search-input"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </div>

      <Link to={"new"}>
        <button>Add User</button>
      </Link>
    </div>
  );
};

export default AddItem;
