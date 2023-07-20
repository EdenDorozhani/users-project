import AddItem from "../components/AddItem";
import UserList from "../components/UserList";
import UserInfo from "../components/UserInfo";
import DeletePop from "../UI/DeletePop";
import { useState } from "react";

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modaldata, setModalData] = useState(null);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className="userlist-container">
      <AddItem />
      <table className="userlist-body">
        <UserInfo />
        <UserList getData={setModalData} open={openModalHandler} />
      </table>
      {openModal && <DeletePop props={modaldata} close={closeModalHandler} />}
    </div>
  );
};

export default HomePage;
