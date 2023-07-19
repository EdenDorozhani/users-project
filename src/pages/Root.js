import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h1 style={{ marginLeft: 32, marginBottom: 110 }}>DashBoard</h1>
      <Outlet />
    </>
  );
};

export default RootLayout;
