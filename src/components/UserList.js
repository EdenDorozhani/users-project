import UserItem from "./UserItem";
import { useSelector } from "react-redux";

const UserList = ({ getData, open }) => {
  const data = useSelector((state) => state.items);

  return (
    <>
      <tbody>
        {data.map((user) => {
          return (
            <UserItem
              key={user.id}
              props={user}
              authData={getData}
              openModal={open}
            />
          );
        })}
      </tbody>
    </>
  );
};

export default UserList;
