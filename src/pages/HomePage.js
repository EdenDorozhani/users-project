import AddItem from "../components/AddItem";
import UserList from "../components/UserList";
import UserInfo from "../components/UserInfo";
import DeletePop from "../UI/DeletePop";

const HomePage = () => {
  return (
    <>
      <div className="userlist-container">
        <AddItem />
        <table className="userlist-body">
          <UserInfo />
          <UserList />
        </table>
      </div>
    </>
  );
};

export default HomePage;
