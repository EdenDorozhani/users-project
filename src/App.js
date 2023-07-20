import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { dataAction } from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import EditPage from "./pages/EditPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

function App() {
  const [waiting, setWaiting] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "edit-item/:id", element: <EditPage /> },
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
