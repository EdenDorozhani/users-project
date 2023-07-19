import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { dataAction } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import EditPage from "./pages/EditPage";
import RootLayout from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: ":id", element: <EditPage /> },
        { path: "new", element: <NewPage /> },
      ],
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Taking data failed.");
      }

      dispatch(dataAction.getData(data));
    };

    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;