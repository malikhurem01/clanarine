import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./Components/Pages/Login/LoginPage";
import MainPage from "./Components/Pages/Main/MainPage";
import EmailPage from "./Components/Pages/Email/EmailPage";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import RegularMemberships from "./Components/Pages/RegularMemberships/RegularMemberships";
import { clanovi, nadlezni } from "./database";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/email", element: <EmailPage /> },
  { path: "/naslovna", element: <MainPage /> },
  { path: "/clanarine", element: <RegularMemberships /> },
]);

const fetchData = () => {
  const hasDataInStorage =
    JSON.parse(localStorage.getItem("clanovi"))?.length > 0;
  if (!hasDataInStorage) {
    localStorage.setItem("clanovi", JSON.stringify(clanovi));
  }
  localStorage.setItem("nadlezni", JSON.stringify(nadlezni));
  startApplication();
};

const startApplication = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

fetchData();
