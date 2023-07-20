const UserInfo = ({ identifier }) => {
  return (
    <thead className="userlist-info">
      <tr>
        {identifier.map((ident) => {
          return <th key={ident}>{ident}</th>;
        })}
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

export default UserInfo;
