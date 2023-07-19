import DeletePop from "../UI/DeletePop";
import UserItem from "./UserItem";
import { useSelector } from "react-redux";

const UserList = () => {
  const data = useSelector((state) => state.items);

  return (
    <tbody>
      {data.map((user) => {
        return <UserItem key={user.id} props={user} />;
      })}
    </tbody>
  );
};

export default UserList;
