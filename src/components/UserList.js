import UserItem from "./UserItem";
import { useSelector } from "react-redux";

const UserList = ({ getData, open, searchValue }) => {
  const data = useSelector((state) => state.items);

  //FILTERED
  const filtered =
    searchValue.length > 0 &&
    data
      .filter((item) => {
        return item.username.match(
          searchValue[0].toUpperCase() + searchValue.slice(1)
        );
      })
      .map((user) => {
        return (
          <UserItem
            key={user.id}
            props={user}
            authData={getData}
            openModal={open}
          />
        );
      });

  //NOT FILTERED
  const notFiltered =
    searchValue.length === 0 &&
    data.map((user) => {
      return (
        <UserItem
          key={user.id}
          props={user}
          authData={getData}
          openModal={open}
        />
      );
    });

  return (
    <>
      <tbody>
        {filtered}
        {notFiltered}
      </tbody>
    </>
  );
};

export default UserList;
