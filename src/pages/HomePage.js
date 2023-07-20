import AddItem from "../components/AddItem";
import UserList from "../components/UserList";
import UserInfo from "../components/UserInfo";
import DeletePop from "../UI/DeletePop";
import { useState } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modaldata, setModalData] = useState(null);
  const [value, setValue] = useState("");

  const data = useSelector((state) => {
    return state.items;
  });

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const getSearchInputValue = (searchValue) => {
    setValue(searchValue);
  };

  const identifier = ["Id", "Name", "Username", "Email", "City"];

  return (
    <div className="userlist-container">
      <AddItem search={getSearchInputValue} />
      <table className="userlist-body">
        <UserInfo identifier={identifier} />
        <UserList
          searchValue={value}
          getData={setModalData}
          open={openModalHandler}
        />
      </table>
      {data.length === 0 && (
        <p className="empty-users">
          You have no users! Reload to fetch API and get users.
        </p>
      )}
      {openModal && <DeletePop props={modaldata} close={closeModalHandler} />}
    </div>
  );
};

export default HomePage;
